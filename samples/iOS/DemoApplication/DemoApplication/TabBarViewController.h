//
//  TabBarViewController.h
//  DemoApplication
//
//  Created by Robert Shoemate on 8/30/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface TabBarViewController : UIViewController <UITabBarDelegate>

/// A label used to tell the user what they selected.
@property (retain, nonatomic) IBOutlet UILabel *label;

@end
