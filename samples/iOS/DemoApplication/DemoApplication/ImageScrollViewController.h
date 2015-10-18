//
//  ImageScrollViewController.h
//  DemoApplication
//
//  Created by Robert Shoemate on 7/11/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>


@interface ImageScrollViewController : UIViewController <UIScrollViewDelegate> {
    UIScrollView *scrollView;
    UIImageView *imageView;
}
@property (nonatomic, retain) IBOutlet UIScrollView *scrollView;
@property (nonatomic, retain) UIImageView *imageView;


@end