//
//  GestureViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 5/27/15.
//  Copyright (c) 2015 Telerik. All rights reserved.
//

#import "GestureViewController.h"

@interface GestureViewController ()

@property (nonatomic, retain) IBOutlet UILabel *label;

@end

@implementation GestureViewController

- (void)dealloc {
    [self->_label release];
    [super dealloc];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    
    UITapGestureRecognizer *singleTap = [[[UITapGestureRecognizer alloc] initWithTarget: self action:@selector(handleTapGesture:)] autorelease];
    singleTap.numberOfTapsRequired = 1;
    [self.view addGestureRecognizer:singleTap];
    
    UITapGestureRecognizer *doubleTap = [[[UITapGestureRecognizer alloc] initWithTarget: self action:@selector(handleDoubleTapGesture:)] autorelease];
    doubleTap.numberOfTapsRequired = 2;
    [self.view addGestureRecognizer:doubleTap];
    
    UIPinchGestureRecognizer *pinch = [[[UIPinchGestureRecognizer alloc] initWithTarget:self action:@selector(handlePinchGesture:)] autorelease];
    [self.view addGestureRecognizer:pinch];
    
    UIRotationGestureRecognizer *rotation = [[[UIRotationGestureRecognizer alloc] initWithTarget:self action:@selector(handleRotationGesture:)] autorelease];
    [self.view addGestureRecognizer:rotation];
    
    UISwipeGestureRecognizer *swipe = [[[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(handleSwipeGesture:)] autorelease];
    [self.view addGestureRecognizer:swipe];
    
    UIPanGestureRecognizer *pan = [[[UIPanGestureRecognizer alloc] initWithTarget:self action:@selector(handlePanGesture:)] autorelease];
    [self.view addGestureRecognizer:pan];
    
    UILongPressGestureRecognizer *longPress = [[[UILongPressGestureRecognizer alloc] initWithTarget:self action:@selector(handleLongPressGesture:)] autorelease];
    [self.view addGestureRecognizer:longPress];
    
    [singleTap requireGestureRecognizerToFail:doubleTap];
    [pan requireGestureRecognizerToFail:swipe];
}

- (IBAction)handleTapGesture:(UIGestureRecognizer *)gestureRecognizer {
    self.label.text = @"Tap Gesture Detected";
}
- (IBAction)handleDoubleTapGesture:(UIGestureRecognizer *)gestureRecognizer {
    self.label.text = @"Double Tap Gesture Detected";
}
- (IBAction)handlePinchGesture:(UIGestureRecognizer *)gestureRecognizer {
    self.label.text = @"Pinch Gesture Detected";
}
- (IBAction)handleRotationGesture:(UIGestureRecognizer *)gestureRecognizer {
    self.label.text = @"Rotation Gesture Detected";
}
- (IBAction)handleSwipeGesture:(UIGestureRecognizer *)gestureRecognizer {
    self.label.text = @"Swipe Gesture Detected";
}
- (IBAction)handlePanGesture:(UIGestureRecognizer *)gestureRecognizer {
    self.label.text = @"Pan Gesture Detected";
}
- (IBAction)handleLongPressGesture:(UIGestureRecognizer *)gestureRecognizer {
    self.label.text = @"Long Press Gesture Detected";
}

@end
