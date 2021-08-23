import React from 'react'

import { GaCard } from '../components'
import { Image, Transformation } from 'cloudinary-react'
import { A1, A2, /* A3, A4, A5, A6, */ A7 /* A8, A9, A10 */ } from '../p5'

export const GaGroup = (props) => {
  return (
    <>
      <GaCard
        linkColor="#000"
        href="https://editor.p5js.org/hug0/sketches/qSd-4t2Wt"
      >
        <Image
          className="im"
          cloudName="hug0"
          publicId="go-sqrgradient1"
          alt="sqr gradient 1"
        >
          <Transformation aspectRatio="1:1" crop="fill" fetchFormat="auto" />
        </Image>
      </GaCard>
      <GaCard href="https://editor.p5js.org/hug0/sketches/acMx6vOG4">
        <A1 className="im" role="img" alt="sunset"></A1>
      </GaCard>
      <GaCard
        linkColor="#fff"
        href="https://editor.p5js.org/hug0/sketches/D7RH0Hm9y"
      >
        <A2 className="im" role="img" alt="tree christmas"></A2>
      </GaCard>
      <GaCard
        linkColor="#f36a19"
        href="https://editor.p5js.org/hug0/sketches/7b-Me5PCa"
      >
        {/* <A3 className="im"></A3> */}
        <Image
          className="im"
          cloudName="hug0"
          publicId="ga-randomdotgrid_zkc71d"
          alt="dots random grid"
        >
          <Transformation aspectRatio="1:1" crop="fill" fetchFormat="auto" />
        </Image>
      </GaCard>
      <GaCard href="https://editor.p5js.org/hug0/sketches/cxPnkj95Q">
        {/*  <A4 className="im"></A4> */}
        <Image
          className="im"
          cloudName="hug0"
          publicId="ga-circleshadow"
          alt="circle shadow"
        >
          <Transformation aspectRatio="1:1" crop="fill" fetchFormat="auto" />
        </Image>
      </GaCard>
      <GaCard href="https://editor.p5js.org/hug0/sketches/PUTOVojk1">
        {/*  <A5 className="im"></A5> */}
        <Image
          className="im"
          cloudName="hug0"
          publicId="ga-circlesgrid"
          alt="dots 1 grid"
        >
          <Transformation aspectRatio="1:1" crop="fill" fetchFormat="auto" />
        </Image>
      </GaCard>
      <GaCard href="https://editor.p5js.org/hug0/sketches/n3X0ZXdxk">
        {/* <A6 className="im"></A6> */}
        <Image
          className="im"
          cloudName="hug0"
          publicId="ga-coloredcirclesgrid"
          alt="dots 2 grid"
        >
          <Transformation aspectRatio="1:1" crop="fill" fetchFormat="auto" />
        </Image>
      </GaCard>
      <GaCard
        linkColor="#f36a19"
        href="https://editor.p5js.org/hug0/sketches/URwNbuFhB"
      >
        {/*  <A10 className="im"></A10> */}
        <Image
          className="im"
          cloudName="hug0"
          publicId="ga-blackpen"
          alt="random lines"
        >
          <Transformation aspectRatio="1:1" crop="fill" fetchFormat="auto" />
        </Image>
      </GaCard>
      <GaCard
        linkColor="#f36a19"
        href="https://editor.p5js.org/hug0/sketches/3E6uv8tyD"
      >
        {/* <A9 className="im"></A9> */}
        <Image
          className="im"
          cloudName="hug0"
          publicId="ga-squaregridrotation"
          alt="sqr 2 grid"
        >
          <Transformation aspectRatio="1:1" crop="fill" fetchFormat="auto" />
        </Image>
      </GaCard>
      <GaCard href="https://editor.p5js.org/hug0/sketches/V7SOXVkpw">
        {/* <A8 className="im"></A8> */}
        <Image
          className="im"
          cloudName="hug0"
          publicId="ga-squaregrid"
          alt="sqr 1 grid"
        >
          <Transformation aspectRatio="1:1" crop="fill" fetchFormat="auto" />
        </Image>
      </GaCard>
      <GaCard href="https://editor.p5js.org/hug0/sketches/P4vg5KCxF">
        <A7 className="im" role="img" alt="4:3"></A7>
      </GaCard>
      <div className="dummy card"></div>
    </>
  )
}
