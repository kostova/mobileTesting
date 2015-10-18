//
//  TableViewViewController.h
//  DemoApplication
//
//  Created by Robert Shoemate on 8/23/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface TableViewViewController : UIViewController <UITableViewDataSource, UITableViewDelegate> {
    
}
@property (nonatomic, retain) IBOutlet UITableView *tableView;

@end
