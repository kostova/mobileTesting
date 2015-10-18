//
//  TSCollectionCell.m
//  DemoApplication
//
//  Created by David Rumley on 10/19/12.
//  Copyright (c) 2012 Telerik. All rights reserved.
//

#import "TSCollectionCell.h"

@implementation TSCollectionCell

- (id)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
        NSArray *arrayOfViews;
        // Find out what type of device we are using.
        if (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPhone)
            arrayOfViews = [[NSBundle mainBundle] loadNibNamed:@"CollectionViewCell" owner:self options:nil];
        else
            arrayOfViews = [[NSBundle mainBundle] loadNibNamed:@"CollectionViewCell-iPad" owner:self options:nil];
        
        if (arrayOfViews.count < 1)
            return nil;
        
        if (![[arrayOfViews objectAtIndex:0] isKindOfClass:[UICollectionViewCell class]])
            return nil;
        
        self = [arrayOfViews objectAtIndex:0];
    }
    return [self retain]; // TODO: Ask Robert why this works...
}

- (void)dealloc {
    [super dealloc];
}

@end
