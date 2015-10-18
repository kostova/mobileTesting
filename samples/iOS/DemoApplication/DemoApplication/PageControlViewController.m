//
//  PageControlViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 8/29/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import "PageControlViewController.h"
#import "PageControlPageViewController.h"

#define kPageControlPages 5

@interface PageControlViewController ()

- (void) loadScrollViewWithPage:(NSInteger)page;

@end

@implementation PageControlViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil {
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
        self->_viewControllers = [[NSMutableArray alloc] init];
        pageControlUsed = NO;
    }
    return self;
}

- (void) dealloc {
    self->_scrollView.delegate = nil;
    
    [self->_pageControl release];
    [self->_scrollView release];
    [self->_viewControllers release];
    [super dealloc];
}

#pragma mark - View lifecycle

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    
    self.navigationItem.title = @"UIPageControl";
    
    for (int i = 0; i < kPageControlPages; i++) {
        [self.viewControllers addObject:[NSNull null]];
    }
    
    self.scrollView.pagingEnabled = YES;
    self.scrollView.contentSize = CGSizeMake(self.scrollView.frame.size.width * kPageControlPages, self.scrollView.frame.size.height);
    self.scrollView.showsHorizontalScrollIndicator = NO;
    self.scrollView.showsVerticalScrollIndicator = NO;
    self.scrollView.scrollsToTop = NO;
    self.scrollView.delegate = self;
    
    self.pageControl.numberOfPages = kPageControlPages;
    self.pageControl.currentPage = 0;
    
    [self loadScrollViewWithPage:0];
    [self loadScrollViewWithPage:1];
}

- (void)loadScrollViewWithPage:(NSInteger)page {
    if (page < 0) return;
    if (page >= kPageControlPages) return;
    
    // create a new page if necessary
    PageControlPageViewController *controller = [self.viewControllers objectAtIndex:page];
    if ((NSNull *)controller == [NSNull null]) {
        controller = [[PageControlPageViewController alloc] initWithPage:page];
        [self.viewControllers replaceObjectAtIndex:page withObject:controller];
        [controller release];
    }
    
    if (nil == controller.view.superview) {
        CGRect frame = self.scrollView.frame;
        frame.origin.x = frame.size.width * page;
        frame.origin.y = 0;
        controller.view.frame = frame;
        [self.scrollView addSubview:controller.view];
    }
}

- (void)scrollViewDidScroll:(UIScrollView *)sender {
    if (pageControlUsed)
        return;
    
    CGFloat pageWidth = self.scrollView.frame.size.width;
    int page = floor((self.scrollView.contentOffset.x - pageWidth / 2) / pageWidth) + 1;
    
    self.pageControl.currentPage = page;
    
    [self loadScrollViewWithPage:page - 1];
    [self loadScrollViewWithPage:page];
    [self loadScrollViewWithPage:page + 1];
}

- (void)scrollViewDidEndDecelerating:(UIScrollView *)scrollView 
{
    pageControlUsed = NO;
}


- (IBAction)changePage:(id)sender {
    NSInteger page = self.pageControl.currentPage;
    
    [self loadScrollViewWithPage:page - 1];
    [self loadScrollViewWithPage:page];
    [self loadScrollViewWithPage:page + 1];
    
    CGRect frame = self.scrollView.frame;
    frame.origin.x = frame.size.width * page;
    frame.origin.y = 0;
    
    [self.scrollView scrollRectToVisible:frame animated:YES];
    pageControlUsed = YES;
}

- (void)viewDidUnload {
    [super viewDidUnload];
    // Release any retained subviews of the main view.
    // e.g. self.myOutlet = nil;
    self.scrollView = nil;
    self.pageControl = nil;
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    return (interfaceOrientation == UIInterfaceOrientationPortrait);
}

@end
