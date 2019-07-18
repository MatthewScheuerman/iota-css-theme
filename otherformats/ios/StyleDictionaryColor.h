
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Fri, 28 Jun 2019 22:07:52 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorBrandTealBase,
ColorBrandJadeBase,
ColorBrandBlueberry55,
ColorBrandBlueberryBase,
ColorGrey10,
ColorGrey15,
ColorGrey20,
ColorGrey22,
ColorGrey30,
ColorGrey60,
ColorGrey75,
ColorGreySteel,
ColorGreySteel40,
ColorGreyWarm,
ColorGreyWarm30,
ColorGreyCool80,
ColorFeedbackYellow,
ColorFeedbackRed,
ColorFeedbackGreen,
ColorFeedbackBlue
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
