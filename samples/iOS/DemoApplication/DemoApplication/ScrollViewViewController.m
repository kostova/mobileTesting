//
//  ScrollViewViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 8/23/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import "ScrollViewViewController.h"

@implementation ScrollViewViewController
@synthesize scrollView;

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

    if (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPad) {
        scrollView.contentSize = CGSizeMake(1400, 1400);
    } else {
        scrollView.contentSize = CGSizeMake(500, 500);
    }
    
    self.navigationItem.title = @"UIScrollView";
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
    // e.g. self.myOutlet = nil;
    self.scrollView = nil;
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    return (interfaceOrientation == UIInterfaceOrientationPortrait);
}

@end
