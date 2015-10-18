//
//  TextViewViewController.h
//  DemoApplication
//
//  Created by Robert Shoemate on 8/23/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface TextViewViewController : UIViewController

@property (nonatomic, retain) IBOutlet UITextView *textView;

- (IBAction) resignResponder:(id)sender;

@end
