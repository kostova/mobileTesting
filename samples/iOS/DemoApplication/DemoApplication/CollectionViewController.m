//
//  CollectionViewController.m
//  DemoApplication
//
//  Created by David Rumley on 10/19/12.
//  Copyright (c) 2012 Telerik. All rights reserved.
//

#import "CollectionViewController.h"
#import "TSCollectionCell.h"

#define CollectionViewControllerSections 1
#define CollectionViewControllerCellAmount 56

@interface CollectionViewController ()

@end

@implementation CollectionViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        
    }
    return self;
}

- (void)dealloc {
    [self->_dataArray release];
    [self->_collectionView release];
    [super dealloc];
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    
    [self.collectionView setBackgroundColor:[UIColor whiteColor]];
    
    NSMutableArray *colorRows = [[NSMutableArray alloc] init];
    
    // Create the amount of cells base off of CollectionViewControllerCellAmount
    for (int i = 0; i < CollectionViewControllerCellAmount; i++)
        [colorRows addObject:[self getRandomColor]];
    // Add the colors to the object list
    NSArray *dataSections = [[NSArray alloc] initWithObjects:colorRows, nil];
    self.dataArray = dataSections;
    
    [dataSections release];
    [colorRows release];
    
    
    [self.collectionView registerClass:[TSCollectionCell class] forCellWithReuseIdentifier:@"tsCollectionViewCell"];
    
    UICollectionViewFlowLayout *collectionLayout = [[UICollectionViewFlowLayout alloc] init];
    // Make sure the item size is correct for the device.
    if (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPhone)
        [collectionLayout setItemSize:CGSizeMake(70, 70)];
    else
        [collectionLayout setItemSize:CGSizeMake(182, 182)];
    
    [collectionLayout setScrollDirection:UICollectionViewScrollDirectionVertical];
    [self.collectionView setCollectionViewLayout:collectionLayout];
    [collectionLayout release];
    
    self.title = @"UICollectionView";
}

/// This will return a random color for the background of the cell.
- (UIColor *)getRandomColor {
    
    CGFloat hue = ( arc4random() % 256 / 256.0 );
    CGFloat saturation = ( arc4random() % 128 / 256.0 ) + 0.5;
    CGFloat brightness = ( arc4random() % 128 / 256.0 ) + 0.5;
    
    return [UIColor colorWithHue:hue saturation:saturation brightness:brightness alpha:1];
}

#pragma mark -
#pragma mark UICollectionViewDataSource
- (NSInteger)numberOfSectionsInCollectionView:(UICollectionView *)collectionView {
    return CollectionViewControllerSections;
}

- (NSInteger)collectionView:(UICollectionView *)collectionView numberOfItemsInSection:(NSInteger)section {
    NSMutableArray *sectionArray = [self.dataArray objectAtIndex:section];
    return [sectionArray count];
}

- (UICollectionViewCell *)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath {
    // Get the cell color from the data.
    UIColor *cellColor = (UIColor *)[[self.dataArray objectAtIndex:indexPath.section] objectAtIndex:indexPath.row];

    static NSString *cellIdentifier = @"tsCollectionViewCell";
    
    TSCollectionCell *cell = (TSCollectionCell *)[collectionView dequeueReusableCellWithReuseIdentifier:cellIdentifier forIndexPath:indexPath];
    
    cell.backgroundColor = cellColor;
    
    return cell;
}

#pragma mark -
#pragma mark UICollectionViewDelegate
- (void)collectionView:(UICollectionView *)collectionView didSelectItemAtIndexPath:(NSIndexPath *)indexPath {
    // We are getting the cell here for easy access later.
    UICollectionViewCell *cell = [collectionView cellForItemAtIndexPath:indexPath];
    
    cell.backgroundColor = [self getRandomColor];
}

#pragma mark -
#pragma mark SupportOS Protocal Implementation
- (BOOL)doesCurrentDeviceOSSupportController {
    if ([[[UIDevice currentDevice] systemVersion] compare:@"6.0" options:NSNumericSearch] != NSOrderedAscending)
        return YES;
    return NO;
}

@end
