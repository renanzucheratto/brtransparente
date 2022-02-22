import { createStitches, globalCss } from '@stitches/react'
import {
    purpleA,
    purpleDarkA,
    violet,
    yellow,
    tomato,
    green,
    gray,
    orange
} from '@radix-ui/colors'

const globalSyles = globalCss({
    '@font-face': [
        {
            fontFamily: 'WorkSans-Regular',
            src: 'local("WorkSans-Regular"), url("./src/assets/fonts/WorkSans-Regular.ttf")',
        },
        {
            fontFamily: 'WorkSans-Bold',
            src: 'local("WorkSans-Bold"), url("./src/assets/fonts/WorkSans-Bold.ttf")',
        },
        {
            fontFamily: 'WorkSans-BoldItalic',
            src: 'local("WorkSans-BoldItalic"), url("./src/assets/fonts/WorkSans-BoldItalic.ttf")',
        },
        {
            fontFamily: 'WorkSans-ExtraBold',
            src: 'local("WorkSans-ExtraBold"), url("./src/assets/fonts/WorkSans-ExtraBold.ttf")',
        },
        {
            fontFamily: 'WorkSans-ExtraBoldItalic',
            src: 'local("WorkSans-ExtraBoldItalic"), url("./src/assets/fonts/WorkSans-ExtraBoldItalic.ttf")',
        },
        {
            fontFamily: 'WorkSans-Thin',
            src: 'local("WorkSans-Thin"), url("./src/assets/fonts/WorkSans-Thin.ttf")',
        },
        {
            fontFamily: 'WorkSans-ThinItalic',
            src: 'local("WorkSans-ThinItalic"), url("./src/assets/fonts/WorkSans-ThinItalic.ttf")',
        },
        {
            fontFamily: 'WorkSans-SemiBold',
            src: 'local("WorkSans-SemiBold"), url("./src/assets/fonts/WorkSans-SemiBold.ttf")',
        },
        {
            fontFamily: 'WorkSans-Italic',
            src: 'local("WorkSans-Italic"), url("./src/assets/fonts/WorkSans-Italic.ttf")',
        },
        {
            fontFamily: 'WorkSans-ExtraLight',
            src: 'local("WorkSans-ExtraLight"), url("./src/assets/fonts/WorkSans-ExtraLight.ttf")',
        },
        {
            fontFamily: 'WorkSans-ExtraLightLight',
            src: 'local("WorkSans-ExtraLightLight"), url("./src/assets/fonts/WorkSans-ExtraLightLight.ttf")',
        },
        {
            fontFamily: 'WorkSans-Light',
            src: 'local("WorkSans-Light"), url("./src/assets/fonts/WorkSans-Light.ttf")',
        },
        {
            fontFamily: 'WorkSans-LightItalic',
            src: 'local("WorkSans-LightItalic"), url("./src/assets/fonts/WorkSans-LightItalic.ttf")',
        },
        {
            fontFamily: 'WorkSans-Medium',
            src: 'local("WorkSans-Medium"), url("./src/assets/fonts/WorkSans-Medium.ttf")',
        },
        {
            fontFamily: 'WorkSans-MediumItalic',
            src: 'local("WorkSans-ExtraLightLight"), url("./src/assets/fonts/WorkSans-ExtraLightLight.ttf")',
        },
        {
            fontFamily: 'WorkSans-SemiBold',
            src: 'local("WorkSans-SemiBold"), url("./src/assets/fonts/WorkSans-SemiBold.ttf")',
        },
        {
            fontFamily: 'WorkSans-SemiBoldItalic',
            src: 'local("WorkSans-SemiBoldItalic"), url("./src/assets/fonts/WorkSans-SemiBoldItalic.ttf")',
        },
        {
            fontFamily: 'WorkSans-Black',
            src: 'local("WorkSans-Black"), url("./src/assets/fonts/WorkSans-Black.ttf")',
        }
    ],
    '*': {
        fontFamily: 'WorkSans-Regular'
    },
    'p': {
        margin: 0,
        lineHeight: '20px'
    }
})

const SizesDefaultApp = {
    1: '0.313rem', // 5px
    2: '0.625rem', // 10px
    3: '0.938rem', // 15px
    4: '1.250rem', // 20px
    5: '1.563rem', // 25px
    6: '1.875rem', // 30px
    7: '2.188rem', // 35px
    8: '2.500rem', // 40px
    9: '2.813rem', // 45px
}

const { styled, css } = createStitches({
    theme: {
        colors: {
            ...violet,
            ...purpleA,
            ...purpleDarkA,
            ...yellow,
            ...tomato,
            ...green,
            ...gray,
            ...orange
        },
        fontSizes: {
            1: '0.625rem', //10px
            2: '0.75rem', //12px
            3: '0.875rem', //14px
            4: '1rem', //16px
            5: '1.125rem', //18px
            6: '1.25rem', //20px
            7: '1.375rem', //22px
            8: '1.5rem', //24px
            9: '1.625rem', //26px
            10: '1.625rem', //28px
        },
        fonts: {
            light: 'WorkSans-Light',
            regular: 'WorkSans-Regular',
            bold: 'WorkSans-bold',
            extraBold: 'WorkSans-ExtraBold',
            extraBoldItalic: 'WorkSans-ExtraBoldItalic',
            black: 'WorkSans-Black'
        },
        borderWidths: {
            1: '1px',
            2: '2px',
            3: '3px',
            4: '4px'
        },
        borderStyles: {
            1: 'solid',
            2: 'dotted'
        },
        space: SizesDefaultApp,
        sizes: SizesDefaultApp,
        radii: {
            1: '2px',
            2: '4px',
            3: '6px',
            4: '8px',
            5: '10px',
            full: '100%',
        },
        shadows: {
            1: '0 0 40px #ddd'
        }
    }
})

export {
    globalSyles,
    css,
    styled
}