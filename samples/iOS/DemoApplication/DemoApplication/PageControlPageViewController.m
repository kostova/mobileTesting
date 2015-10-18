//
//  PageControlPageViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 8/29/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import "PageControlPageViewController.h"

@implementation PageControlPageViewController
@synthesize pageLabel;
@synthesize page=_page;

- (id) initWithPage:(NSInteger)page
{
    if (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPad) {
        self = [self initWithNibName:@"PageControlPageViewController-iPad" bundle:nil];
    }
    else {
        self = [self initWithNibName:@"PageControlPageViewController" bundle:nil];
    }
    
    if (self)
    {
        _page = page;
    }
    
    return self;
}

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void) dealloc
{
    self.pageLabel = nil;
    [super dealloc];
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
    
    self.navigationItem.title = @"Page Control";
    self.pageLabel.text = [NSString stringWithFormat:@"Page: %lu", (unsigned long)_page];
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
    // e.g. self.myOutlet = nil;
    self.pageLabel = nil;
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    return (interfaceOrientation == UIInterfaceOrientationPortrait);
}

@end
