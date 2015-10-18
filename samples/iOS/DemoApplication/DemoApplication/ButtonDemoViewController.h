//
//  ButtonsViewController.h
//  DemoApplication
//
//  Created by Robert Shoemate on 6/28/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ButtonDemoViewController : UIViewController

@property (nonatomic, retain) IBOutlet UILabel *lblButtonTapped;

- (IBAction)buttonTapped:(id)sender;

@end
