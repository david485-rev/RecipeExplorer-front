import React from 'react'
import "../../styles/Home/Home.css"

function Home() {
  return (
    <div className='home-wrapper'>
      <h2>Recipe Title</h2>
      <img src='' alt=''></img>
      <div className='buttons-wrapper'>
        <button id="left-arrow">&laquo;</button>
        <button id="comments">Comments</button>
        <button id="right-arrow">&raquo;</button>
      </div>
    </div>
  )
}

export default Home;