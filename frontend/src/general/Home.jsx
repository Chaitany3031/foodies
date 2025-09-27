import React from 'react'
import '../index.css'

const videos = [
  {
    id: 1,
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'This is a sample description for the store. It will be truncated if too long.',
    storeUrl: '/store/1'
  },
  {
    id: 2,
    url: 'https://www.w3schools.com/html/movie.mp4',
    description: 'Another store with a different video and a longer description that should be truncated to two lines only.',
    storeUrl: '/store/2'
  }
  // Add more video objects here
]

const Home = () => {
  return (
    <div className="reels-container">
      {videos.map(video => (
        <div className="reel" key={video.id}>
          <div className="reel-top">
            <div className="reel-description">{video.description}</div>
            <a href={video.storeUrl} className="visit-store-btn">Visit Store</a>
          </div>
          <video
            className="reel-video"
            src={video.url}
            controls
            autoPlay
            loop
            muted
          />
        </div>
      ))}
    </div>
  )
}

export default Home

