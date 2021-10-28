import { Video as CloudinaryVideo } from 'cloudinary-react'

const Video = (props) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

  return (
    <CloudinaryVideo
      muted
      className="video"
      cloudName={cloudName}
      publicId={props.publicId}
      controls={false}
      sourceTypes={['webm', 'mp4']}
      loop
      autoPlay={!props.playOnOver ? true : false}
      poster={{
        startOffset: '0',
        fetchFormat: 'auto',
      }}
      onMouseOver={(e) => {
        if (props.playOnOver) {
          e.target.play()
        }
      }}
      onMouseOut={(e) => {
        if (props.playOnOver) {
          e.target.currentTime = 0
          e.target.pause()
        }
      }}
    ></CloudinaryVideo>
  )
}

export default Video
