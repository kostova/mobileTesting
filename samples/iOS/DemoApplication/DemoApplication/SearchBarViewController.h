//
//  SearchBarViewController.h
//  DemoApplication
//
//  Created by Robert Shoemate on 3/18/13.
//  Copyright (c) 2013 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface SearchBarViewController : UIViewController <UITableViewDataSource, UITableViewDelegate, UISearchDisplayDelegate>

@property (nonatomic, retain) IBOutlet UITableView *tableView;

@end
