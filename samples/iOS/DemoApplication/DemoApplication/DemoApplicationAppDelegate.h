//
//  DemoApplicationAppDelegate.h
//  DemoApplication
//
//  Created by Robert Shoemate on 6/9/11.
//  Copyright 2011 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>

#define DEMO_APP_VERSION (@"2.3.1.2")

@class RootViewController;

@interface DemoApplicationAppDelegate : NSObject <UIApplicationDelegate> {

}

@property (nonatomic, retain) IBOutlet UIWindow *window;

@property (nonatomic, retain) IBOutlet UINavigationController *navigationController;

@end
