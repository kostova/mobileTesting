//
//  TabBarViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 8/30/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import "TabBarViewController.h"

@implementation TabBarViewController

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
    
    self.navigationItem.title = @"UITabBar";
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
#pragma mark UITabBarDelegate Implementation
- (void)tabBar:(UITabBar *)tabBar didSelectItem:(UITabBarItem *)item {
    switch (item.tag) {
        case 1:
            self.label.text = @"Favorites";
            break;
        case 2:
            self.label.text = @"More";
            break;
        case 3:
            self.label.text = @"Item 3";
            break;
        case 4:
            self.label.text = @"Item 4";
        default:
            break;
    }
}

@end
