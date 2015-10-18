//
//  TextFieldsViewController.h
//  DemoApplication
//
//  Created by Robert Shoemate on 6/28/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>


@interface TextFieldsViewController : UIViewController
@property (nonatomic, retain) IBOutlet UITextField *textField1;
@property (nonatomic, retain) IBOutlet UITextField *textField2;
@property (nonatomic, retain) IBOutlet UITextField *textField3;

- (IBAction) resignResponder:(id)sender;

@end
