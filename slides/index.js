import './style.css'
import {slides as s100} from './slides/100_title.mdx';
import {slides as s200} from './slides/200_intro.mdx';
import {slides as s210} from './slides/210_test_pyramide.mdx';
import {slides as s300} from './slides/300_jest_intro.mdx';
import {slides as s400} from './slides/400_installation.mdx';
import {slides as s500} from './slides/500_assertion.mdx';
import {slides as s600} from './slides/600_snapshot-testing.mdx';
import {slides as s700} from './slides/700_mocking.mdx';
import {slides as s800} from './slides/800_jsdom.mdx';
import {slides as s900} from './slides/900_cli.mdx';
import {slides as s999} from './slides/999_outro.mdx';
import 'animate.css/animate.min.css'

export {default as theme} from './theme'

export const slides = [
    ...s100,
    ...s200,
    ...s210,
    ...s300,
    ...s400,
    ...s500,
    ...s600,
    ...s700,
    ...s800,
    ...s900,
    ...s999
]