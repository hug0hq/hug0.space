//import {  Video, Transformation } from 'cloudinary-react'
//import { Card } from './card'
//import { Link } from './link'
import Image from 'next/image'

//import { Video } from './video'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
const Video = dynamic(() => import('./video'))
const Card = dynamic(() => import('./card'))

export const ArtCard = (props) => {
  //console.log(props.tags)

  const tags = useMemo(
    () =>
      props.tags.map((tag, index) => {
        return <p key={index}>{tag}</p>
      }),
    [props.tags]
  )

  return (
    <Card>
      <div className="card--img" style={{ backgroundColor: props.color }}>
        {/*  <a
          href={props.href}
          target="_black"
          aria-label="source code"
          rel="noreferrer"
        > */}
        {props.video ? (
          <Video
           /*  className="im" */
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
            /*   className="im" */
              src={`./${props.publicId}.png`}
              alt={props.alt}
              /* width={100}
            height={100} */
              layout="fill"
              /*  placeholder="blur" */
            />
          </>
        )}
        {/*   </a> */}
      </div>
      <div className="card--dec">
        <div className="dec--tags" style={{ display: 'flex', flexFlow: 'row' }}>{tags}</div>
        <a
          href={props.href}
          target="_black"
          aria-label="source code"
          rel="noreferrer"
          style={{ textDecoration: 'underline', margin:' 0 1em' }}
        >
          See Source
        </a>
      </div>
      {/* <Link color={props.linkColor}></Link> */}
    </Card>
  )
}
