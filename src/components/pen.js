import React from 'react'

import { Card } from './card'
import { Link } from './link'
 import { Video } from 'cloudinary-react'
//import { buildVideoUrl } from 'cloudinary-build-url'

export const Pen = (props) => {
  /* const url = buildVideoUrl('dog', {
    cloud: {
      cloudName: 'hug0',
    },
  }) */

  return (
    <Card>
      <div className="thumbnail" style={{ backgroundColor: props.color }}>
        <a href={props.href} target="_black" rel="noreferrer" aria-label="source code">
          
          <Video
            onMouseEnter={(event) => {
              event.target.play()
            }}
            onMouseLeave={(event) => {
              event.target.currentTime = 0
              event.target.pause()
            }}
            cloudName="hug0"
            publicId={props.id}
            loop="loop"
            controls={false}
            poster={
              'https://res.cloudinary.com/hug0/image/upload/' +
              props.id +
              '-poster'
            }
          /> 
        </a>
      </div>
      <Link color={props.linkColor}></Link>
    </Card>
  )
}
