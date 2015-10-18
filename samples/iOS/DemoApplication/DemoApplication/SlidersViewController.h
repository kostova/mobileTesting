//
//  SlidersViewController.h
//  DemoApplication
//
//  Created by Robert Shoemate on 6/28/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface SlidersViewController : UIViewController

@property (nonatomic, retain) IBOutlet UILabel *lblSlider1;
@property (nonatomic, retain) IBOutlet UILabel *lblSlider2;
@property (nonatomic, retain) IBOutlet UILabel *lblSlider3;
@property (nonatomic, retain) IBOutlet UILabel *lblSlider4;

- (IBAction) sliderValueChanged:(id)sender;

@end
