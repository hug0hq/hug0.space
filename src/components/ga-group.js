import React from 'react';

import { GaCard } from './ga-card'
//import loadable from '@loadable/component'
import { Image } from 'cloudinary-react';

import { A1, A2,/*  A3, A4, A5, A6, */ A7, /* A8, A9, A10  */} from '../p5'

//const A1 = React.lazy(() => import('../p5/p5-1'))
//const {A1} = loadable(() => import('../p5/p5-1'), { fallback: <div>Loading...</div> })
/* const A2 = loadable(() => import('../p5/p5-2'), { fallback: <div>Loading...</div> })
const A3 = loadable(() => import('../p5/p5-3'), { fallback: <div>Loading...</div> })
const A4 = loadable(() => import('../p5/p5-4'), { fallback: <div>Loading...</div> })
const A5 = loadable(() => import('../p5/p5-5'), { fallback: <div>Loading...</div> })
const A6 = loadable(() => import('../p5/p5-6'), { fallback: <div>Loading...</div> })
const A7 = loadable(() => import('../p5/p5-7'), { fallback: <div>Loading...</div> })
const A8 = loadable(() => import('../p5/p5-8'), { fallback: <div>Loading...</div> })
const A9 = loadable(() => import('../p5/p5-9'), { fallback: <div>Loading...</div> })
const A10 = loadable(() => import('../p5/p5-10'), { fallback: <div>Loading...</div> })
 */
/* const A1 = loadable(() =>
 
    import('../p5/p5-1'),
    { fallback: <div>Loading...</div> }
); */


export const GaGroup = (props) => {

    return (
        <>
            <GaCard href="https://editor.p5js.org/hug0Hq/sketches/acMx6vOG4">
                <A1 className="im"></A1>
            </GaCard>
            <GaCard linkColor="#fff" href="https://editor.p5js.org/hug0Hq/sketches/D7RH0Hm9y">
                <A2 className="im"></A2>
            </GaCard>
            <GaCard linkColor="#f36a19" href="https://editor.p5js.org/hug0Hq/sketches/7b-Me5PCa">
                {/* <A3 className="im"></A3> */}
                <Image className="im" cloudName="hug0" publicId="ga-randomdotgrid_zkc71d" /* width="" */ crop="scale" />

            </GaCard>
            <GaCard href="https://editor.p5js.org/hug0Hq/sketches/cxPnkj95Q">
                {/*  <A4 className="im"></A4> */}
                <Image className="im" cloudName="hug0" publicId="ga-circleshadow" /* width="" */ crop="scale" />

            </GaCard>
            <GaCard href="https://editor.p5js.org/hug0Hq/sketches/PUTOVojk1">
                {/*  <A5 className="im"></A5> */}
                <Image className="im" cloudName="hug0" publicId="ga-circlesgrid" /* width="" */ crop="scale" />

            </GaCard>
            <GaCard href="https://editor.p5js.org/hug0Hq/sketches/n3X0ZXdxk">
                {/* <A6 className="im"></A6> */}
                <Image className="im" cloudName="hug0" publicId="ga-coloredcirclesgrid" /* width="" */ crop="scale" />

            </GaCard>
            <GaCard linkColor="#f36a19" href="https://editor.p5js.org/hug0Hq/sketches/URwNbuFhB">
                {/*  <A10 className="im"></A10> */}
                <Image className="im" cloudName="hug0" publicId="ga-blackpen" /* width="" */ crop="scale" />

            </GaCard>
            <GaCard linkColor="#f36a19" href="https://editor.p5js.org/hug0Hq/sketches/JYV2MMUzW">
                {/* <A9 className="im"></A9> */}
                <Image className="im" cloudName="hug0" publicId="ga-squaregridrotation" /* width="" */ crop="scale" />
            </GaCard>
            <GaCard href="https://editor.p5js.org/hug0Hq/sketches/V7SOXVkpw">
                {/* <A8 className="im"></A8> */}
                <Image className="im" cloudName="hug0" publicId="ga-squaregrid" /* width="" */ crop="scale" />

            </GaCard>
            <GaCard href="https://editor.p5js.org/hug0Hq/sketches/P4vg5KCxF">
                <A7 className="im"></A7>
            </GaCard>
        </>

    );
}