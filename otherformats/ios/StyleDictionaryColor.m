
//
// StyleDictionaryColor.m
//
// Do not edit directly
// Generated on Fri, 28 Jun 2019 18:31:21 GMT
//

#import "StyleDictionaryColor.h"


@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.13f green:0.64f blue:0.62f alpha:1.00f],
[UIColor colorWithRed:0.12f green:0.60f blue:0.58f alpha:1.00f],
[UIColor colorWithRed:0.31f green:0.17f blue:0.53f alpha:1.00f],
[UIColor colorWithRed:0.38f green:0.25f blue:0.60f alpha:1.00f],
[UIColor colorWithRed:0.98f green:0.98f blue:0.98f alpha:1.00f],
[UIColor colorWithRed:0.96f green:0.96f blue:0.96f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.93f alpha:1.00f],
[UIColor colorWithRed:0.90f green:0.90f blue:0.90f alpha:1.00f],
[UIColor colorWithRed:0.77f green:0.77f blue:0.77f alpha:1.00f],
[UIColor colorWithRed:0.25f green:0.25f blue:0.25f alpha:1.00f],
[UIColor colorWithRed:0.18f green:0.18f blue:0.18f alpha:1.00f],
[UIColor colorWithRed:0.25f green:0.25f blue:0.25f alpha:1.00f],
[UIColor colorWithRed:0.31f green:0.31f blue:0.31f alpha:1.00f],
[UIColor colorWithRed:0.56f green:0.56f blue:0.56f alpha:1.00f],
[UIColor colorWithRed:0.95f green:0.95f blue:0.95f alpha:1.00f],
[UIColor colorWithRed:0.11f green:0.12f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.76f blue:0.03f alpha:1.00f],
[UIColor colorWithRed:0.86f green:0.21f blue:0.27f alpha:1.00f],
[UIColor colorWithRed:0.16f green:0.65f blue:0.27f alpha:1.00f],
[UIColor colorWithRed:0.09f green:0.64f blue:0.72f alpha:1.00f]
    ];
  });

  return colorArray;
}

@end
