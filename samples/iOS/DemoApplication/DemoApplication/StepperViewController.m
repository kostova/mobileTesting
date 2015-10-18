//
//  StepperViewController.m
//  DemoApplication
//
//  Created by David Rumley on 10/9/12.
//  Copyright (c) 2012 Telerik. All rights reserved.
//

#import "StepperViewController.h"

@implementation StepperViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)dealloc {
    [self->_valueLabel1 release];
    [self->_valueLabel2 release];
    [self->_valueLabel3 release];
    [self->_valueLabel4 release];
    [super dealloc];
}

- (void)viewDidLoad
{
    [super viewDidLoad];

    if ([[[UIDevice currentDevice] systemVersion] compare:@"5.0" options:NSNumericSearch] != NSOrderedAscending) {
        // The current OS supports the UIStepper View
        for (int i = 1; i <= 4; i++) { // Update the labels on view startup
            [self valueChanged:[self.view viewWithTag:i]];
        }
        
    } else { // The current OS does not support the UIStepper View
        // TODO: Drop this conditional block when we drop support for iOS 4
        // Lets display an alert to the user letting them know that this view is not supported by their device's OS.
        UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:@"Unsupported iOS Version"
                                                            message:@"Your device's current version of iOS does not support UIStepper."
                                                           delegate:nil
                                                  cancelButtonTitle:@"OK"
                                                  otherButtonTitles:nil];
        [alertView show];
        [alertView release];
    }
    
    self.navigationItem.title = @"UIStepper";
}

// TODO: Remove -viewDidUnload when we drop support for iOS 5
- (void)viewDidUnload {
    self.valueLabel1 = nil;
    self.valueLabel2 = nil;
    self.valueLabel3 = nil;
    self.valueLabel4 = nil;
    [super viewDidUnload];
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)toInterfaceOrientation {
    // Return YES for supported orientations
    return (toInterfaceOrientation == UIInterfaceOrientationPortrait);
}

#ifdef __IPHONE_7_0
#if (__IPHONE_OS_VERSION_MAX_ALLOWED >= __IPHONE_7_0)
- (UIRectEdge)edgesForExtendedLayout {
    return UIRectEdgeNone;
}
#endif
#endif

#pragma mark -
#pragma mark Actions
- (IBAction)valueChanged:(id)sender
{
    UIStepper *stepper = (UIStepper *)sender;
    NSString *strValue = [NSString stringWithFormat:@"Value: %.1lf", stepper.value];
    
    switch (stepper.tag) {
        case 1:
            self.valueLabel1.text = strValue;
            break;
        case 2:
            self.valueLabel2.text = strValue;
            break;
        case 3:
            self.valueLabel3.text = strValue;
            break;
        case 4:
            self.valueLabel4.text = strValue;
            break;
        default:
            break;
    }
}

#pragma mark -
#pragma mark SupportOS Protocal Implementation
// TODO: Remove -doesCurrentDeviceOSSupportController when we drop support for iOS 4
- (BOOL)doesCurrentDeviceOSSupportController {
    if ([[[UIDevice currentDevice] systemVersion] compare:@"5.0" options:NSNumericSearch] != NSOrderedAscending)
        return YES;
    return NO;
}

@end
