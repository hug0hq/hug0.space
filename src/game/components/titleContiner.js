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
      className="section"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <h1 ref={ref} className="textWhite tx" style={{ opacity: 0.1 }}>
        {htmlText}
      </h1>
    </div>
  )
})
TitleContainer.displayName = 'TitleContainer'
