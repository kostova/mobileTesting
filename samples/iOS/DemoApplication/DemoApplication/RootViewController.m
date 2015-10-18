//
//  RootViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 6/9/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import "RootViewController.h"
#import "ButtonDemoViewController.h"
#import "SlidersViewController.h"
#import "TextFieldsViewController.h"
#import "SwitchesViewController.h"
#import "WebViewDemoController.h"
#import "DatePickerViewController.h"
#import "SegmentedControlViewController.h"
#import "PickerViewController.h"
#import "TableViewViewController.h"
#import "TextViewViewController.h"
#import "ScrollViewViewController.h"
#import "PageControlViewController.h"
#import "ToolBarViewController.h"
#import "TabBarViewController.h"
#import "StepperViewController.h"
#import "SearchBarViewController.h"
#import "ImageViewController.h"
#import "SupportedOS.h"
#import "DemoApplicationAppDelegate.h"

@interface RootViewController ()

@property (nonatomic, retain) NSArray *menuItems;
@property (nonatomic, retain) NSDictionary *menuItemControllers;

@end

@implementation RootViewController

- (void)dealloc
{
    self->_menuItems = nil;
    self->_menuItemControllers = nil;
    [super dealloc];
}

#pragma mark - View lifecycle


// Implement viewDidLoad to do additional setup after loading the view, typically from a nib.
- (void)viewDidLoad
{
    [super viewDidLoad];
    
    self.menuItems = [NSArray arrayWithObjects:
                      @"UIButton",
                      @"UISlider",
                      @"UISwitch",
                      @"UIStepper",
                      @"UITextField",
                      @"UITextView",
                      @"UISearchBar",

                      @"UISegmentedControl",
                      @"UIToolbar",
                      @"UITabBar",
                      @"UIPageControl",

                      @"UIDatePicker",
                      @"UIPickerView",
                      @"UITableView",
                      @"UICollectionView",

                      @"UIScrollView",
                      @"UIScrollView w/Image",
                      @"UIImageView",
                      @"UIWebView",
                      @"UIGestureRecognizers",
                      nil];
    
    self.menuItemControllers = [NSDictionary dictionaryWithObjectsAndKeys:
                                @"ButtonDemoViewController", @"UIButton",
                                @"SlidersViewController", @"UISlider",
                                @"SwitchesViewController", @"UISwitch",
                                @"StepperViewController", @"UIStepper",
                                @"TextFieldsViewController", @"UITextField",
                                @"TextViewViewController", @"UITextView",
                                @"SearchBarViewController", @"UISearchBar",
                                
                                @"SegmentedControlViewController", @"UISegmentedControl",
                                @"ToolBarViewController", @"UIToolbar",
                                @"TabBarViewController", @"UITabBar",
                                @"PageControlViewController", @"UIPageControl",
                                
                                @"DatePickerViewController", @"UIDatePicker",
                                @"PickerViewController", @"UIPickerView",
                                @"TableViewViewController", @"UITableView",
                                @"CollectionViewController", @"UICollectionView",
                                
                                @"ScrollViewViewController", @"UIScrollView",
                                @"ImageScrollViewController", @"UIScrollView w/Image",
                                @"ImageViewController", @"UIImageView",
                                @"WebViewDemoController", @"UIWebView",
                                @"GestureViewController", @"UIGestureRecognizers",

                               nil];

    // about button
    UIBarButtonItem *aboutBtn = [[UIBarButtonItem alloc] initWithTitle:@"About" style:UIBarButtonItemStyleBordered target:self action:@selector(showAbout:)];
    self.navigationItem.rightBarButtonItem = aboutBtn;
    [aboutBtn release];
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    //return (interfaceOrientation == UIInterfaceOrientationLandscapeLeft);
    return YES;
}

- (IBAction)showAbout:(id)sender
{
    NSString *message = [NSString stringWithFormat:@"Mobile Testing Demo Program\nVersion %@\n© 2014 Telerik", DEMO_APP_VERSION];
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"About"
                                                    message:message
                                                   delegate:self
                                          cancelButtonTitle:@"OK"
                                          otherButtonTitles:nil];
    [alert show];
    [alert release];
}

#pragma mark -
#pragma mark Table View Delegate Methods
- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    NSString *item = [self.menuItems objectAtIndex:indexPath.row];
    NSString *controllerTypeString = [self.menuItemControllers objectForKey:item];
    Class controllerType = NSClassFromString(controllerTypeString);
    
    if (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPad)
        controllerTypeString = [controllerTypeString stringByAppendingString:@"-iPad"];
    
    // create the controller
    UIViewController *controller = [[controllerType alloc] initWithNibName:controllerTypeString bundle:nil];
    // Check to make sure the type of controller is supported by the device's OS.
    if ([controller conformsToProtocol:@protocol(SupportedOS)]) {
        
        id<SupportedOS> supportedOS = (id<SupportedOS>)controller;
        // Check to see if the View is supported by the device's OS.
        if ([supportedOS doesCurrentDeviceOSSupportController]) {
            [self.navigationController pushViewController:controller animated:YES];
        } else {// If the device doesn't support that controller, skip the selection and warn the user.
            [controller release];
            UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:@"Unsupported iOS Version"
                                                                message:[NSString stringWithFormat:@"Your device's current version of iOS does not support %@.", item]
                                                               delegate:nil
                                                      cancelButtonTitle:@"OK"
                                                      otherButtonTitles:nil];
            [alertView show];
            [alertView release];
            return;
        }
    }
    // If it doesn't implement the protocal, just display it anyways.
    else {
        [self.navigationController pushViewController:controller animated:YES];
    }
    // Release the controller.
    [controller release];
}

#pragma mark -
#pragma mark Table View Data Source Methods
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return [self.menuItems count];
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    static NSString *tableIdentifier = @"TestsTableIdentifier";
    
    // dequeue or create a new cell
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:tableIdentifier];
    if (cell == nil) {
        cell = [[[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:tableIdentifier] autorelease];
        cell.accessoryType = UITableViewCellAccessoryDisclosureIndicator;
    }
    
    NSUInteger row = [indexPath row];
    cell.textLabel.text = [self.menuItems objectAtIndex:row];
    return cell;
}

@end
