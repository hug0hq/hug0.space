import React from 'react';

import { GaCard } from '../components'
import { Image } from 'cloudinary-react';
import { A1, A2, /* A3, A4, A5, A6, */ A7, /* A8, A9, A10 */ } from '../p5'

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
                <Image className="im" cloudName="hug0" publicId="ga-randomdotgrid_zkc71d" crop="scale" />
            </GaCard>
            <GaCard href="https://editor.p5js.org/hug0Hq/sketches/cxPnkj95Q">
                {/*  <A4 className="im"></A4> */}
                <Image className="im" cloudName="hug0" publicId="ga-circleshadow" crop="scale" />
            </GaCard>
            <GaCard href="https://editor.p5js.org/hug0Hq/sketches/PUTOVojk1">
                {/*  <A5 className="im"></A5> */}
                <Image className="im" cloudName="hug0" publicId="ga-circlesgrid" crop="scale" />
            </GaCard>
            <GaCard href="https://editor.p5js.org/hug0Hq/sketches/n3X0ZXdxk">
                {/* <A6 className="im"></A6> */}
                <Image className="im" cloudName="hug0" publicId="ga-coloredcirclesgrid" crop="scale" />
            </GaCard>
            <GaCard linkColor="#f36a19" href="https://editor.p5js.org/hug0Hq/sketches/URwNbuFhB">
                {/*  <A10 className="im"></A10> */}
                <Image className="im" cloudName="hug0" publicId="ga-blackpen" crop="scale" />
            </GaCard>
            <GaCard linkColor="#f36a19" href="https://editor.p5js.org/hug0Hq/sketches/3E6uv8tyD">
                {/* <A9 className="im"></A9> */}
                <Image className="im" cloudName="hug0" publicId="ga-squaregridrotation" crop="scale" />
            </GaCard>
            <GaCard href="https://editor.p5js.org/hug0Hq/sketches/V7SOXVkpw">
                {/* <A8 className="im"></A8> */}
                <Image className="im" cloudName="hug0" publicId="ga-squaregrid" crop="scale" />
            </GaCard>
            <GaCard href="https://editor.p5js.org/hug0Hq/sketches/P4vg5KCxF">
                <A7 className="im"></A7>
            </GaCard>
        </>
    );
}