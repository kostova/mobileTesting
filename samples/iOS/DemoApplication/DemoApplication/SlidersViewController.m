//
//  SlidersViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 6/28/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import "SlidersViewController.h"


@implementation SlidersViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)dealloc
{
    [self->_lblSlider1 release];
    [self->_lblSlider2 release];
    [self->_lblSlider3 release];
    [self->_lblSlider4 release];
    [super dealloc];
}

#pragma mark - View lifecycle

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    self.navigationItem.title = @"UISlider";
    
    // update labels on startup
    for (int i = 1; i <= 4; i++) {
        [self sliderValueChanged:[self.view viewWithTag:i]];
    }
}

// TODO: Remove -viewDidUnload when we drop support for iOS 5
- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
    self.lblSlider1 = nil;
    self.lblSlider2 = nil;
    self.lblSlider3 = nil;
    self.lblSlider4 = nil;
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

- (IBAction) sliderValueChanged:(id)sender
{
    UISlider *slider = sender;
    NSString *strValue = [NSString stringWithFormat:@"%f", slider.value]; 

    switch (slider.tag) {
        case 1:
            self.lblSlider1.text = strValue;
            break;
        case 2:
            self.lblSlider2.text = strValue;
            break;
        case 3:
            self.lblSlider3.text = strValue;
            break;
        case 4:
            self.lblSlider4.text = strValue;
            break;
        default:
            break;
    }
}

@end
