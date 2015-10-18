//
//  PageControlViewController.h
//  DemoApplication
//
//  Created by Robert Shoemate on 8/29/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface PageControlViewController : UIViewController <UIScrollViewDelegate> {
    
    BOOL pageControlUsed;
}
@property (nonatomic, retain) IBOutlet UIPageControl *pageControl;
@property (nonatomic, retain) IBOutlet UIScrollView *scrollView;
@property (nonatomic, retain) NSMutableArray *viewControllers;

@end
