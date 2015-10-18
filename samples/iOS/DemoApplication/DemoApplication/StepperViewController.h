//
//  StepperViewController.h
//  DemoApplication
//
//  Created by David Rumley on 10/9/12.
//  Copyright (c) 2012 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "SupportedOS.h"

@interface StepperViewController : UIViewController <SupportedOS>

@property (retain, nonatomic) IBOutlet UILabel *valueLabel1;
@property (retain, nonatomic) IBOutlet UILabel *valueLabel2;
@property (retain, nonatomic) IBOutlet UILabel *valueLabel3;
@property (retain, nonatomic) IBOutlet UILabel *valueLabel4;

- (IBAction)valueChanged:(id)sender;

@end