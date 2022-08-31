import dynamic from 'next/dynamic'

import { useMemo } from 'react'

const Video = dynamic(() => import('./video'))
const Card = dynamic(() => import('./card'))

export const Pen = (props) => {
  const tags = useMemo(
    () =>
      props.tags.map((tag, index) => {
        return <p key={index}>{tag}</p>
      }),
    [props.tags]
  )

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
        <Video publicId={props.publicId} playOnOver />
      </div>
    </Card>
  )
}
