//
//  ButtonsViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 6/28/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import "ButtonDemoViewController.h"

@implementation ButtonDemoViewController

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
    [self->_lblButtonTapped release];
    [super dealloc];
}

#pragma mark - View lifecycle

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    self.navigationItem.title = @"UIButton";
}

// TODO: Remove -viewDidUnload when we drop support for iOS 5
- (void)viewDidUnload
{
    [super viewDidUnload];
    
    // Release any retained subviews of the main view.
    self.lblButtonTapped = nil;
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
#pragma mark Actions
NSString * const ButtonTypeStrings[] = {
    @"UIButtonTypeCustom",
    @"UIButtonTypeRoundedRect",
    @"UIButtonTypeDetailDisclosure",
    @"UIButtonTypeInfoLight",
    @"UIButtonTypeInfoDark",
    @"UIButtonTypeContactAdd"
};

- (IBAction)buttonTapped:(id)sender
{
    UIButton *btn = sender;
    
    if (btn.titleLabel.text.length > 0)
        self.lblButtonTapped.text = [NSString stringWithFormat:@"Button Tapped: %@", btn.titleLabel.text];
    else
        self.lblButtonTapped.text = [NSString stringWithFormat:@"Button Tapped: %@", ButtonTypeStrings[btn.buttonType]];
}

@end
