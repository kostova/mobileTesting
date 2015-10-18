//
//  PickerViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 8/19/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import "PickerViewController.h"

@interface PickerViewController ()

@property (nonatomic, retain) NSArray *pickerItems; // array of string arrays

@end

@implementation PickerViewController
@synthesize pickerItems;
@synthesize lblCmp1;
@synthesize lblCmp2;

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
        
        self.pickerItems = [[[NSArray alloc] initWithObjects:
                       [[[NSArray alloc] initWithObjects:@"Hello", @"Hey", @"What's Up", nil] autorelease],
                       [[[NSArray alloc] initWithObjects:@"World", @"Earth", @"Universe", nil] autorelease],
                       nil] autorelease];
    }
    return self;
}

- (void) dealloc
{   
    self.pickerItems = nil;
    self.lblCmp1 = nil;
    self.lblCmp2 = nil;
    [super dealloc];
}

#pragma mark - View lifecycle

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    
    self.navigationItem.title = @"UIPickerView";
    
    lblCmp1.text = [[self.pickerItems objectAtIndex:0] objectAtIndex:0];
    lblCmp2.text = [[self.pickerItems objectAtIndex:1] objectAtIndex:0];
}

// TODO: Remove -viewDidUnload when we drop support for iOS 5
- (void)viewDidUnload
{
    [super viewDidUnload];
    
    // Release any retained subviews of the main view.
    self.lblCmp1 = nil;
    self.lblCmp2 = nil;
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    return (interfaceOrientation == UIInterfaceOrientationPortrait);
}

// TODO: Remove conditional compilation when we switch to Xcode 5
#ifdef __IPHONE_7_0
#if (__IPHONE_OS_VERSION_MAX_ALLOWED >= __IPHONE_7_0)
- (UIRectEdge)edgesForExtendedLayout {
    return UIRectEdgeNone;
}
#endif
#endif

#pragma mark -
#pragma mark UIPickerViewDataSource
- (NSInteger)numberOfComponentsInPickerView:(UIPickerView *)pickerView
{
    return self.pickerItems.count;
}

- (NSInteger)pickerView:(UIPickerView *)pickerView numberOfRowsInComponent:(NSInteger)component
{
    NSArray *items = [self.pickerItems objectAtIndex:component];
    return items.count;
}

#pragma mark -
#pragma mark UIPickerViewDelegate
- (NSString *)pickerView:(UIPickerView *)pickerView titleForRow:(NSInteger)row forComponent:(NSInteger)component
{
    NSArray *items = [self.pickerItems objectAtIndex:component];
    
    return [items objectAtIndex:row];
}

- (void)pickerView:(UIPickerView *)pickerView didSelectRow:(NSInteger)row inComponent:(NSInteger)component
{
    if (component == 0)
        lblCmp1.text = [[self.pickerItems objectAtIndex:component] objectAtIndex:row];

    if (component == 1)
        lblCmp2.text = [[self.pickerItems objectAtIndex:component] objectAtIndex:row];
}

@end
