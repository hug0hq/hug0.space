import Image from 'next/image'
import dynamic from 'next/dynamic'

import { useMemo } from 'react'

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

  return (
    <Card>
      <div className="card--img" style={{ backgroundColor: props.color }}>
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
              src={`./${props.publicId}.png`}
              alt={props.alt}
              layout="fill"
            />
          </>
        )}
      </div>
      <div className="card--dec">
        <div className="dec--tags" style={{ display: 'flex', flexFlow: 'row' }}>
          {tags}
        </div>
        <a
          href={props.href}
          target="_black"
          aria-label="source code"
          rel="noreferrer"
          style={{ textDecoration: 'underline', margin: ' 0 1em' }}
        >
          See Source
        </a>
      </div>
    </Card>
  )
}
