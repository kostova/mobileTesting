//
//  SearchBarViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 3/18/13.
//  Copyright (c) 2013 Telerik. All rights reserved.
//

#import "SearchBarViewController.h"

@interface SearchBarViewController ()

@property (nonatomic, retain) NSArray *items;
@property (nonatomic, retain) NSArray *searchedItems;

@end

@implementation SearchBarViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
        NSArray *tmpItems = @[@"Andromeda", @"Cassiopeia", @"Draco", @"Eridanus", @"Fornax", @"Gemini",
                              @"Hercules", @"Indus", @"Leo", @"Mensa", @"Norma", @"Orion", @"Pegasus",
                              @"Reticulum", @"Sagittaris", @"Taurus", @"Ursa Minor", @"Virgo"];
        self->_items = [tmpItems retain];
        self->_searchedItems = [[NSArray alloc] init];
    }
    return self;
}

- (void)dealloc {
    [self->_items release];
    [self->_searchedItems release];
    [self->_tableView release];
    [super dealloc];
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    self.tableView.contentOffset = CGPointMake(0, self.searchDisplayController.searchBar.bounds.size.height);
    self.title = @"UISearchBar";
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

#pragma mark - UISearchDisplayDelegate

- (BOOL)searchDisplayController:(UISearchDisplayController *)controller shouldReloadTableForSearchString:(NSString *)searchString {
    self.searchedItems = [self.items filteredArrayUsingPredicate:[NSPredicate predicateWithFormat:@"self BEGINSWITH[cd] %@", searchString]];
    return YES;
}

#pragma mark - UITableViewDelegate

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    if (tableView == self.searchDisplayController.searchResultsTableView) {
        return [self.searchedItems count];
    } else {
        return [self.items count];
    }
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    static NSString *reuseIdentifier = @"reuseIdentifier";
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:reuseIdentifier];
    if (!cell) {
        cell = [[[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:reuseIdentifier] autorelease];
    }
    
    if (tableView == self.searchDisplayController.searchResultsTableView) {
        cell.textLabel.text = [self.searchedItems objectAtIndex:indexPath.row];
    } else {
        cell.textLabel.text = [self.items objectAtIndex:indexPath.row];
    }
    
    return cell;
}

@end
