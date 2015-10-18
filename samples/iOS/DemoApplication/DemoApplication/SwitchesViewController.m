//
//  SwitchesViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 7/1/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import "SwitchesViewController.h"


@implementation SwitchesViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

#pragma mark - View lifecycle

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    
    self.navigationItem.title = @"UISwitch";
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    return (interfaceOrientation == UIInterfaceOrientationPortrait);
}

#ifdef __IPHONE_7_0
#if (__IPHONE_OS_VERSION_MAX_ALLOWED >= __IPHONE_7_0)
- (UIRectEdge)edgesForExtendedLayout {
    return UIRectEdgeNone;
}
#endif
#endif

@end
