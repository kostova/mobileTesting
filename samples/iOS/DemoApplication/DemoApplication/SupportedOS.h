//
//  SupportedOS.h
//  DemoApplication
//
//  Created by David Rumley on 10/19/12.
//  Copyright (c) 2012 Telerik. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol SupportedOS <NSObject>

- (BOOL)doesCurrentDeviceOSSupportController;

@end
