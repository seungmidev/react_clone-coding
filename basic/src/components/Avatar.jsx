import React from 'react'

export default function Avatar({ image, isNew }) {
  return (
    <div className='avatar'>
      {isNew && <span className='new'>NEW</span>}
      <img className='photo' src={image} alt='' />
    </div>
  )
}
