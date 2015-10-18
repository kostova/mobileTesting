//
//  CollectionViewController.h
//  DemoApplication
//
//  Created by David Rumley on 10/19/12.
//  Copyright (c) 2012 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "SupportedOS.h"

@interface CollectionViewController : UIViewController <UICollectionViewDelegate, UICollectionViewDataSource, SupportedOS>

@property(nonatomic, retain) NSArray *dataArray;
@property (nonatomic, retain) IBOutlet UICollectionView *collectionView;

@end
