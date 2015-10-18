//
//  DatePickerViewController.h
//  DemoApplication
//
//  Created by Robert Shoemate on 8/8/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface DatePickerViewController : UIViewController

@property (nonatomic, retain) IBOutlet UIDatePicker *datePicker;
@property (nonatomic, retain) IBOutlet UILabel *lblDateValue;

- (IBAction)dateWasSet:(id)sender;

@end
