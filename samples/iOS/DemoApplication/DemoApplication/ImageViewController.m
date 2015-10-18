//
//  ImageViewController.m
//  DemoApplication
//
//  Created by Robert Shoemate on 4/27/15.
//  Copyright (c) 2015 Telerik. All rights reserved.
//

#import "ImageViewController.h"

@interface ImageViewController () <UIGestureRecognizerDelegate> {
    CGFloat _lastRotation;
    CGFloat _lastScale;
    CGFloat _firstX;
    CGFloat _firstY;
}

@property (nonatomic, retain) IBOutlet UIView *canvas;
@property (nonatomic, retain) IBOutlet UIImageView *photoImage;

@end

@implementation ImageViewController
@synthesize canvas=canvas;
@synthesize photoImage=photoImage;

- (void)viewDidLoad {
    [super viewDidLoad];
    
    UIPinchGestureRecognizer *pinchRecognizer = [[[UIPinchGestureRecognizer alloc] initWithTarget:self action:@selector(scale:)] autorelease];
    [pinchRecognizer setDelegate:self];
    [canvas addGestureRecognizer:pinchRecognizer];
    
    UIRotationGestureRecognizer *rotationRecognizer = [[[UIRotationGestureRecognizer alloc] initWithTarget:self action:@selector(rotate:)] autorelease];
    [rotationRecognizer setDelegate:self];
    [canvas addGestureRecognizer:rotationRecognizer];
    
    UIPanGestureRecognizer *panRecognizer = [[[UIPanGestureRecognizer alloc] initWithTarget:self action:@selector(move:)] autorelease];
    [panRecognizer setMinimumNumberOfTouches:1];
    [panRecognizer setMaximumNumberOfTouches:1];
    [panRecognizer setDelegate:self];
    [canvas addGestureRecognizer:panRecognizer];
}

-(void)scale:(id)sender {
    if([(UIPinchGestureRecognizer*)sender state] == UIGestureRecognizerStateBegan) {
        _lastScale = 1.0;
    }
    
    CGFloat scale = 1.0 - (_lastScale - [(UIPinchGestureRecognizer*)sender scale]);
    
    CGAffineTransform currentTransform = photoImage.transform;
    CGAffineTransform newTransform = CGAffineTransformScale(currentTransform, scale, scale);
    
    [photoImage setTransform:newTransform];
    
    _lastScale = [(UIPinchGestureRecognizer*)sender scale];
}

-(void)rotate:(id)sender {
    if([(UIRotationGestureRecognizer*)sender state] == UIGestureRecognizerStateEnded) {
        _lastRotation = 0.0;
        return;
    }
    
    CGFloat rotation = 0.0 - (_lastRotation - [(UIRotationGestureRecognizer*)sender rotation]);
    
    CGAffineTransform currentTransform = photoImage.transform;
    CGAffineTransform newTransform = CGAffineTransformRotate(currentTransform,rotation);
    
    [photoImage setTransform:newTransform];
    
    _lastRotation = [(UIRotationGestureRecognizer*)sender rotation];
}


-(void)move:(id)sender {
    CGPoint translatedPoint = [(UIPanGestureRecognizer*)sender translationInView:canvas];
    
    if([(UIPanGestureRecognizer*)sender state] == UIGestureRecognizerStateBegan) {
        _firstX = [photoImage center].x;
        _firstY = [photoImage center].y;
    }
    
    translatedPoint = CGPointMake(_firstX+translatedPoint.x, _firstY+translatedPoint.y);
    
    [photoImage setCenter:translatedPoint];
}

@end
