//
//  PageControlPageViewController.h
//  DemoApplication
//
//  Created by Robert Shoemate on 8/29/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface PageControlPageViewController : UIViewController {
    
}
@property (nonatomic) NSUInteger page;
@property (nonatomic, retain) IBOutlet UILabel *pageLabel;

- (id) initWithPage:(NSInteger)page;

@end
