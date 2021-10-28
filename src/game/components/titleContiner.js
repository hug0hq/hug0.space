import { forwardRef, Fragment, useMemo } from 'react'

export const TitleContainer = forwardRef(({ text }, ref) => {

  const htmlText = useMemo(() => {
    return text.map((sentence, sentenceIndex) => {
      return (
        <Fragment key={'br' + sentenceIndex}>
          {sentence.split('').map((char, charIndex) => (
            <span key={'char' + charIndex}>{char}</span>
          ))}
          <br />
        </Fragment>
      )
    })
  }, [text])

  return (
    <div
      className="section "
      id="to-observe"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <h1 ref={ref} className="container textWhite tx" style={process.env.NODE_ENV !== 'production' ? {opacity: 0.1} : {opacity: 0} }>
        {htmlText}
      </h1>
    </div>
  )
})
TitleContainer.displayName = 'TitleContainer'
