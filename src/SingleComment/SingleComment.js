/* eslint-disable jsx-a11y/img-redundant-alt */
import './SingleComment.css'
import React from 'react';

const SingleComment = (props) => {

  const avatar = "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-7.jpg";

  return (
    <div className='comment'>
        <a href='/' className='avatar'>
          <img src={avatar} alt='profile picture'/>
        </a>
        <div className='content'> <a href='/' className='author'> {props.name} </a> 
          <div className='metadata'> 
            <span className='date'> {props.date} </span>
          </div>
          <div className='text'>
            it's amazing
          </div>
        </div>
      </div>
  )
}

export default SingleComment;