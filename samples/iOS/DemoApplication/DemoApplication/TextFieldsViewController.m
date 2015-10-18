//
//  TextFieldsViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 6/28/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import "TextFieldsViewController.h"

@implementation TextFieldsViewController

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
    [self->_textField1 release];
    [self->_textField2 release];
    [self->_textField3 release];
    [super dealloc];
}

#pragma mark - View lifecycle

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    self.navigationItem.title = @"UITextField";
    
    [self.textField1 becomeFirstResponder];
    
    self.textField1.text = @"";
    self.textField2.text = @"";
    self.textField3.text = @"";
    
}

// TODO: Remove -viewDidUnload when we drop support for iOS 5
- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
    self.textField1 = nil;
    self.textField2 = nil;
    self.textField3 = nil;
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    return (interfaceOrientation != UIInterfaceOrientationPortraitUpsideDown);
}

// TODO: Remove conditional compilation when we switch to Xcode 5
#ifdef __IPHONE_7_0
#if (__IPHONE_OS_VERSION_MAX_ALLOWED >= __IPHONE_7_0)
- (UIRectEdge)edgesForExtendedLayout
{
    return UIRectEdgeNone;
}
#endif
#endif

- (IBAction) resignResponder:(id)sender
{
    [self.textField1 endEditing:YES];
    [self.textField2 endEditing:YES];
    [self.textField3 endEditing:YES];
}

@end
