//
//  ImageScrollViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 7/11/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import "ImageScrollViewController.h"


@implementation ImageScrollViewController
@synthesize scrollView;
@synthesize imageView;

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
    [scrollView release];
    [imageView release];
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
    
    UIImageView *tempImageView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"telerik_logo.jpg"]];
    self.imageView = tempImageView;
    [tempImageView release];
    
    scrollView.contentSize = CGSizeMake(imageView.frame.size.width, imageView.frame.size.height);
    scrollView.maximumZoomScale = 4.0;
    scrollView.minimumZoomScale = 0.25;
    scrollView.clipsToBounds = YES;
    scrollView.delegate = self;
    [scrollView addSubview:imageView];
    
    self.navigationItem.title = @"UIScrollView w/Image";
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
    // e.g. self.myOutlet = nil;
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    return (interfaceOrientation == UIInterfaceOrientationPortrait);
}

- (UIView *) viewForZoomingInScrollView:(UIScrollView *)scrollView
{
    return imageView;
}

@end