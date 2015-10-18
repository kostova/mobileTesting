//
//  DatePickerViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 8/8/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import "DatePickerViewController.h"

@implementation DatePickerViewController
@synthesize lblDateValue;
@synthesize datePicker;

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)didReceiveMemoryWarning
{
    // Releases the view if it doesn't have a superview.
    [super didReceiveMemoryWarning];
    
    // Release any cached data, images, etc that aren't in use.
}

#pragma mark - View lifecycle

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    
    self.navigationItem.title = @"UIDatePicker";
    [self dateWasSet:self.datePicker];
}

// TODO: Remove -viewDidUnload when we drop support for iOS 5
- (void)viewDidUnload
{
    [super viewDidUnload];
    
    // Release any retained subviews of the main view.
    self.lblDateValue = nil;
    self.datePicker = nil;
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

- (IBAction)dateWasSet:(id)sender
{
    UIDatePicker *dp = sender;
    
    // update the dat string to be nicely formatted
    NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
    [formatter setDateFormat:@"yyyy-MM-dd '('HH:mm:ss')'"];
    
    self.lblDateValue.text = [NSString stringWithFormat:@"%@", [formatter stringFromDate:[dp date]]];
    
    [formatter release];
}

@end
