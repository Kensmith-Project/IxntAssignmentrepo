import {createTheme, useTheme as useRestyleTheme} from '@shopify/restyle';

import darkMode from './darkMode';
import {palette} from './palette';
import type {PaddingSizesObjectType} from './types';

const lightTheme = createTheme({
  borderRadii: {
    lg: 32,
    sml: 24,
    md: 16,
    none: 0,
    sm: 8,
    xl: 64,
    xs: 4,
  },

  breakpoints: {
    largeScreen: 412,
    phone: 0,
    tablet: 768,
  },

  buttonGradients: {
    primary: [palette.secondaryColor, palette.secondary6, palette.primaryColor],
    secondary: [palette.gradientBlueTop, palette.gradientBlueBottom],
    tatiary: [palette.gradientGreenTop, palette.gradientGreenBottom],
  },
  buttonSizes: {
    lg: {
      paddingHorizontal: 'xl',
      paddingVertical: 'lg',
    },
    md: {
      paddingHorizontal: 'lg',
      paddingVertical: 'md',
    },
    none: {
      paddingHorizontal: 'none',
      paddingVertical: 'none',
    },
    sm: {
      paddingHorizontal: 'md',
      paddingVertical: 'sm',
    },
    xl: {
      paddingHorizontal: 'xxl',
      paddingVertical: 'xl',
    },
    xs: {
      paddingHorizontal: 'sm',
      paddingVertical: 'xs',
    },
  } as PaddingSizesObjectType,

  buttonVariants: {
    defaults: {
      borderRadius: 'sm',
    },
    filled: {
      backgroundColor: 'primaryColor',
    },
    ghost: {
      backgroundColor: 'paleGrey50',
    },
    none: {},
    outlined: {
      borderColor: 'paleGrey',
      borderWidth: 1,
    },
    transparent: {
      backgroundColor: 'transparent',
    },
  },

  colors: {
    ...palette,
    imageBackgroundTint: palette.primaryColor,
    mainBackground: palette.whiteColor,
    textColorInverted: palette.whiteColor,
    primarybackground: palette.white,
    primarythemecolor: palette.backgroundblack,
  },

  fontSizes: {
    caption: 12,
    h1: 32,
    h2: 24,
    h3: 20,
    h4: 18,
    h5: 16,
    h6: 14,
    p: 14,
    s: 6,
  },

  iconSizes: {
    lg: {
      height: 32,
      width: 32,
    },
    m: {
      height: 12,
      width: 12,
    },
    mm: {
      height: 16,
      width: 17,
    },
    md: {
      height: 24,
      width: 24,
    },
    s: {
      height: 4,
      width: 4,
    },
    sml: {
      height: 20,
      width: 20,
    },
    sm: {
      height: 16,
      width: 16,
    },
    xl: {
      height: 48,
      width: 48,
    },
    xll: {
      height: 32,
      width: 99,
    },
    xlll: {
      height: 38,
      width: 140,
    },

    xxl: {
      height: 60,
      width: 60,
    },
    xs: {
      height: 8,
      width: 8,
    },
    xsl: {
      height: 108,
      width: 120,
    },
    pspxl: {
      height: 80,
      width: 80,
    },
    xxxl: {
      height: 138,
      width: 180,
    },
  },

  spacing: {
    lg: 32,
    md: 16,
    mmd: 20,
    none: 0,
    sm: 8,
    sml: 24,
    ss: 6,
    ssm: 8,
    xl: 64,
    xs: 4,
    xxl: 128,
    xxxl: 228,
    xxs: 2,
    xxxs: 1,
    rs: -200,
    rlg: -100,
    rr: -30,
  },

  textInputSizes: {
    lg: {
      paddingHorizontal: 'lg',
      paddingVertical: 'lg',
    },
    md: {
      paddingHorizontal: 'md',
      paddingVertical: 'md',
    },
    none: {
      paddingHorizontal: 'none',
      paddingVertical: 'none',
    },
    sm: {
      paddingHorizontal: 'sm',
      paddingVertical: 'sm',
    },
    xl: {
      paddingHorizontal: 'xl',
      paddingVertical: 'xl',
    },
    xs: {
      paddingHorizontal: 'xs',
      paddingVertical: 'xs',
    },
  } as PaddingSizesObjectType,

  textInputVariants: {
    defaults: {
      borderRadius: 'sm',
      fontSize: 14,
      fontWeight: '500',
    },
    filled: {
      backgroundColor: 'paleGrey50',
      color: 'primaryBlack',
    },
    none: {},
    outlined: {
      borderColor: 'paleGrey',
      borderWidth: 1,
    },
    transparent: {
      backgroundColor: 'transparent',
    },
  },

  textVariants: {
    body: {},
    bold8: {
      color: 'darkGrey',
      fontFamily: 'BentonSans-Bold',
      fontSize: 8,
      fontWeight: '700',
      lineHeight: 16,
    },
    bold10: {
      color: 'darkGrey',
      fontFamily: 'BentonSans-Bold',
      fontSize: 10,
      fontWeight: '700',
      lineHeight: 16,
    },
    bold12: {
      color: 'darkGrey',
      fontFamily: 'BentonSans-Bold',
      fontSize: 12,
      fontWeight: '700',
      lineHeight: 16,
    },
    bold14: {
      fontFamily: 'BentonSans-Bold',
      fontSize: 14,
      fontWeight: '700',
    },
    bold16: {
      fontFamily: 'BentonSans-Bold',
      fontSize: 16,
      fontWeight: '700',
    },
    bold18: {
      color: 'textColor',
      fontFamily: 'BentonSans-Bold',
      fontSize: 18,
      fontWeight: '700',
    },
    bold22: {
      fontFamily: 'BentonSans-Bold',
      fontSize: 22,
      fontWeight: '700',
    },
    bold24: {
      fontFamily: 'BentonSans-Bold',
      fontSize: 24,
      fontWeight: '100',
    },
    bold32: {
      fontFamily: 'BentonSans-Bold',
      fontSize: 32,
      fontWeight: '100',
    },
    bold48: {
      fontFamily: 'BentonSans-Bold',
      fontSize: 48,
      fontWeight: '100',
    },
    defaults: {
      color: 'primaryBlack',
      fontSize: 14,
      fontFamily: 'BentonSans-regular',
    },
    medium10: {
      fontFamily: 'BentonSans-Medium',
      fontSize: 10,
      fontWeight: '400',
    },
    medium12: {
      color: 'textColor',
      fontFamily: 'BentonSans-Medium',
      fontSize: 12,
      fontWeight: '400',
    },
    medium14: {
      fontFamily: 'BentonSans-Medium',
      fontSize: 14,
      fontWeight: '400',
    },
    medium16: {
      color: 'textColor',
      fontFamily: 'BentonSans-Medium',
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 16,
    },
    medium18: {
      fontFamily: 'BentonSans-Medium',
      fontSize: 18,
      fontWeight: '400',
    },
    medium22: {
      fontFamily: 'BentonSans-Medium',
      fontSize: 22,
      fontWeight: '400',
    },
    medium8: {
      fontFamily: 'BentonSans-Medium',
      fontSize: 8,
      fontWeight: '400',
    },
    none: {},
    regular9: {
      fontFamily: 'BentonSans-Regular',
      fontSize: 9,
      fontWeight: '400',
      lineHeight: 16,
    },
    regular10: {
      fontFamily: 'BentonSans-Regular',
      fontSize: 10,
      fontWeight: '400',
      lineHeight: 16,
    },
    regular12: {
      fontFamily: 'BentonSans-Regular',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 16,
    },
    regular14: {
      color: 'textColor',
      fontFamily: 'BentonSans-Regular',
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 16,
    },
    regular16: {
      color: 'textColor',
      fontFamily: 'BentonSans-Regular',
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 20,
    },
    regular18: {
      color: 'textColor',
      fontFamily: 'BentonSans-Regular',
      fontSize: 18,
      fontWeight: '400',
      lineHeight: 18,
    },
    regular22: {
      color: 'textColor',
      fontFamily: 'BentonSans-Regular',
      fontSize: 22,
      fontWeight: '100',
      lineHeight: 22,
    },
    regular8: {
      fontFamily: 'BentonSans-Regular',
      fontSize: 8,
      fontWeight: '400',
    },
    font10: {
      fontFamily: 'BentonSans-Regular',
      fontSize: 10,
      fontWeight: '400',
      lineHeight: 16,
    },
    font12: {
      fontFamily: 'BentonSans-Regular',
      fontSize: 12,
      fontWeight: '400',
    },
    font14: {
      color: 'textColor',
      fontFamily: 'BentonSans-Regular',
      fontSize: 14,
      fontWeight: '400',
    },
    font8: {
      fontFamily: 'BentonSans-Regular',
      fontSize: 8,
      fontWeight: '400',
    },
    title: {
      fontSize: 32,
    },
  },

  zIndices: {
    modal: 100,
    overlay: 10,
  },
});

export type Theme = typeof lightTheme;

export const useTheme = () => useRestyleTheme<Theme>();

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    ...darkMode.colors,
  },
};

export default {darkTheme, lightTheme};
