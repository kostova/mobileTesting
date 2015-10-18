//
//  ToolBarViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 8/30/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import "ToolBarViewController.h"

@implementation ToolBarViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        
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
    self.navigationItem.title = @"UIToolbar";
    
    self.label.text = @"Item 1";
}

- (void)viewDidUnload
{
    [self setLabel:nil];
    [super viewDidUnload];
    // Release any retained subviews of the main view.
    // e.g. self.myOutlet = nil;
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    return (interfaceOrientation == UIInterfaceOrientationPortrait);
}

- (void)dealloc {
    [_label release];
    [super dealloc];
}

#pragma mark -
#pragma mark Actions
- (IBAction)barButtonClicked:(UIBarButtonItem *)sender {
    self.label.text = sender.title;
}
@end
