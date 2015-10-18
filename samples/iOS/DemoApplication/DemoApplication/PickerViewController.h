//
//  PickerViewController.h
//  DemoApplication
//
//  Created by Robert Shoemate on 8/19/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface PickerViewController : UIViewController <UIPickerViewDataSource, UIPickerViewDelegate>
{
    
}
@property (nonatomic, retain) IBOutlet UILabel *lblCmp1;
@property (nonatomic, retain) IBOutlet UILabel *lblCmp2;

@end
