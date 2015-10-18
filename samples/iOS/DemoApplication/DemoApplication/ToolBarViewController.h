//
//  ToolBarViewController.h
//  DemoApplication
//
//  Created by Robert Shoemate on 8/30/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ToolBarViewController : UIViewController

/// Properties
@property (retain, nonatomic) IBOutlet UILabel *label;

/// Actions
- (IBAction)barButtonClicked:(UIBarButtonItem *)sender;

@end
