import Image from 'next/image'
import dynamic from 'next/dynamic'

import { useMemo, useState } from 'react'

const Video = dynamic(() => import('./video'))
const Card = dynamic(() => import('./card'))

export const ArtCard = (props) => {
  const tags = useMemo(
    () =>
      props.tags.map((tag, index) => {
        return <p key={index}>{tag}</p>
      }),
    [props.tags]
  )

  const [loaded, setLoaded] = useState(false)

  return (
    <Card>
      <div className='card--img' style={{ backgroundColor: props.color }}>
        <div className='card--dec'>
          <div
            className='dec--tags'
            style={{ display: 'flex', flexFlow: 'row' }}
          >
            {tags}
          </div>
          <a
            href={props.href}
            target='_black'
            aria-label='source code'
            rel='noreferrer'
            style={{ textDecoration: 'underline', margin: ' 0 1em' }}
          >
            See Source
          </a>
        </div>
        {props.video ? (
          <Video
            publicId={props.publicId}
            alt={props.alt}
            autoPlay
            loop
          ></Video>
        ) : (
          <>
            <Image
              onLoad={() => {
                setLoaded(true)
              }}
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${props.publicId}.png`}
              alt={props.alt}
              className={loaded ? 'loaded' : ''}
              fill
              sizes="width: 100%"
            />
          </>
        )}
      </div>
    </Card>
  )
}
