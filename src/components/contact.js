import React, { useState } from 'react'

export const Contact = () => {
  const [mail] = useState('hi@hug0.space')

  return (
    <div className="mail">
      <h1 className="mail--text">
        Say{' '}
        <a href="mailto:hi@hug0.space?subject=Hi! 👋" className="textWave">
          {mail.split('').map((char, index) => {
            let cssProperties = {}
            cssProperties['--i'] = index
            return (
              <span style={cssProperties} key={index}>
                {char}
              </span>
            )
          })}
        </a>
      </h1>
    </div>
  )
}
