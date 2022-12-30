import React from 'react';

const Author = ({author}) => {
  return (
    <div className='text-center mt-20 mb-8 p-14 relative rounded-lg bg-cyan-100 bg-opacity-40'>
      <div className='absolute left-0 right-2 -top-5'>
        <img
          alt={author.name}
          height='100px'
          width='100px'
          className='align-middle rounded-full'
          src={author.photo.url}
        />
        <h3 className='text-white my-0 text-xl font-bold'>{author.name}</h3>
        <p className='text-white text-lg'>{author.bio}</p>
      </div>
    </div>
  )
}

export default Author