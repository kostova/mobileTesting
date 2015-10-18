//
//  TableViewViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 8/23/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import "TableViewViewController.h"

@interface TableViewViewController ()

@property (nonatomic, retain) NSMutableArray *orderedSections;
@property (nonatomic, retain) NSMutableDictionary *itemsDictionary;

@end

@implementation TableViewViewController
@synthesize tableView=_tableView;
@synthesize itemsDictionary=_itemsDictionary;

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil {
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
        self->_itemsDictionary = [[NSMutableDictionary alloc] init];
        self->_orderedSections = [[NSMutableArray alloc] init];
        
        for (int i = 0; i < 5; i++) {
            NSMutableArray *itemsArr = [NSMutableArray arrayWithObjects:@"Item 0", @"Item 1", @"Item 2", @"Item 3", @"Item 4" , nil];
            NSString *sectionName = [NSString stringWithFormat:@"Section %i", i];
            [self.orderedSections addObject:sectionName];
            [self.itemsDictionary setObject:itemsArr forKey:sectionName];
        }
    }
    
    return self;
}

- (void) dealloc {
    [self->_itemsDictionary release];
    [self->_orderedSections release];
    [self->_tableView release];
    [super dealloc];
}

#pragma mark - View lifecycle

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.navigationItem.title = @"UITableView";
    self.navigationItem.rightBarButtonItem = self.editButtonItem;
}

- (void)viewDidUnload {
    [super viewDidUnload];
    self.tableView = nil;
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
    return YES;
}

#pragma mark -
#pragma mark Table View Data Source Methods
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    NSString *key = [self.orderedSections objectAtIndex:section];
    return [[self.itemsDictionary objectForKey:key] count];
}

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    return self.orderedSections.count;
}

- (NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section {
    return [self.orderedSections objectAtIndex:section];
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    static NSString *tableIdentifier = @"TestsTableIdentifier";
    
    // dequeue or create a new cell
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:tableIdentifier];
    if (cell == nil) {
        cell = [[[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:tableIdentifier] autorelease];
    }
    
    NSString *key = [self.orderedSections objectAtIndex:indexPath.section];
    NSString *value = [(NSArray *)[self.itemsDictionary objectForKey:key] objectAtIndex:indexPath.row];
    cell.textLabel.text = value;
    return cell;
}

#pragma mark UITableViewDataSource - Inserting/Deleting Methods
- (void) setEditing:(BOOL)editing animated:(BOOL)animated {
    [super setEditing:editing animated:animated];
    [self.tableView setEditing:editing animated:animated];
}

- (BOOL)tableView:(UITableView *)tableView canEditRowAtIndexPath:(NSIndexPath *)indexPath {
    return YES;
}

- (void)tableView:(UITableView *)tableView commitEditingStyle:(UITableViewCellEditingStyle)editingStyle forRowAtIndexPath:(NSIndexPath *)indexPath
{
    if (editingStyle == UITableViewCellEditingStyleDelete)
    {
        NSString *key = [self.orderedSections objectAtIndex:indexPath.section];
        NSMutableArray *objects = [self.itemsDictionary objectForKey:key];
        [objects removeObjectAtIndex:indexPath.row];
        [self.tableView deleteRowsAtIndexPaths:[NSArray arrayWithObject:indexPath] withRowAnimation:UITableViewRowAnimationFade];
    }
}

#pragma mark UITableViewDataSource - Reordering Methods
- (BOOL)tableView:(UITableView *)tableView canMoveRowAtIndexPath:(NSIndexPath *)indexPath
{
    return YES;
}

- (void)tableView:(UITableView *)tableView moveRowAtIndexPath:(NSIndexPath *)fromIndexPath toIndexPath:(NSIndexPath *)toIndexPath
{
    NSString *fromKey = [self.orderedSections objectAtIndex:fromIndexPath.section];
    NSMutableArray *fromObjects = [self.itemsDictionary objectForKey:fromKey];
    NSString *fromObject = [[(NSArray *)[self.itemsDictionary objectForKey:fromKey] objectAtIndex:fromIndexPath.row] retain];

    NSString *toKey = [self.orderedSections objectAtIndex:toIndexPath.section];
    NSMutableArray *toObjects = [self.itemsDictionary objectForKey:toKey];
    
    [fromObjects removeObjectAtIndex:fromIndexPath.row];
    [toObjects insertObject:fromObject atIndex:toIndexPath.row];
    
    [fromObject release];
}


@end
