//import {  Video, Transformation } from 'cloudinary-react'
import { Card } from './card'
import { Link } from './link'
import Image from 'next/image'

import { Video } from './video'

export const ArtCard = (props) => {
  return (
    <Card>
      <a
        href={props.href}
        target="_black"
        aria-label="source code"
        rel="noreferrer"
      >
        {props.video ? (
          <Video
            className="im"
            cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
            publicId={props.publicId}
            alt={props.alt}
            autoPlay
            loop
          >
           {/*  <Transformation
              aspectRatio={props.aspectRatio || '1:1'}
              crop="fill"
              fetchFormat="auto"
              audioCodec="none"
              fetchFormat="auto"
              quality="auto:eco"
            /> */}
          </Video>
        ) : (
          <>
            {/*  <Image
            className="im"
            cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
            publicId={props.publicId}
            alt={props.alt}
          >
            <Transformation
              aspectRatio={props.aspectRatio || '1:1'}
              quality="auto:eco"
              crop="fill"
              fetchFormat="auto"
            />
          </Image> */}
          <Image
            className="im"
            src={`./${props.publicId}.png`}
            alt={props.alt}
            /* width={100}
            height={100} */
            layout="fill"
            /*  placeholder="blur" */
          />
          </>
        )}
      </a>
      <Link color={props.linkColor}></Link>
    </Card>
  )
}
