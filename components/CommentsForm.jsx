import React, { useState, useEffect, useRef } from 'react'

const CommentsForm = () => {

  const [error, setError] = useState([]);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        CommentPosts
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea 
          ref={commentEl} 
          placeholder='Comment'
          name='comment'
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"        
        >

        </textarea>
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        
      </div>
    </div>
  )
}

export default CommentsForm