import React from 'react'

import { Card } from './card'
import { Link } from './link'

export const GaCard = (props) => {
  return (
    <Card>
      <a href={props.href} target="_black" aria-label="source code" rel="noreferrer">
        {props.children}
      </a>
      <Link color={props.linkColor}></Link>
    </Card>
  )
}
