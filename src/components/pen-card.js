
//import { Card } from './card'
//import { Link } from './link'
//import { Video } from 'cloudinary-react'

//import { Video } from './video'
//import { buildVideoUrl } from 'cloudinary-build-url'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
const Video = dynamic(() => import('./video')) 
const Card = dynamic(() => import('./card')) 


export const Pen = (props) => {
  /* const url = buildVideoUrl('dog', {
    cloud: {
      cloudName: 'hug0',
    },
  }) */
  const tags = useMemo(
    () =>
      props.tags.map((tag, index) => {
        return <p key={index}>{tag}</p>
      }),
    [props.tags]
  )

  return (
    <Card>
     {/*   <div className="card--img"></div>
      <div className="card--dec">
        <div></div>
        <p>p5 glsl</p>
      </div> */}

      <div className="card--img" style={{ backgroundColor: props.color }}/* className="thumbnail "  */>
        {/* <a
          href={props.href}
          target="_black"
          rel="noreferrer"
          aria-label="source code"
        > */}
          <Video
            /* onMouseEnter={(event) => {
              event.target.play()
            }}
            onMouseLeave={(event) => {
              event.target.currentTime = 0
              event.target.pause()
            }} */
            publicId={props.publicId}
            playOnOver
            //src={`./${props.publicId}.png`}
            //alt={props.alt}
            /* cloudName="hug0"
            publicId={props.id}
            loop="loop"
            controls={false}
            poster={
              'https://res.cloudinary.com/hug0/image/upload/' +
              props.id +
              '-poster'
            } */
          />
       {/*  </a> */}
      </div>
      {/* <Link color={props.linkColor}></Link> */}
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
    </Card>
  )
}
