import React, { useState, useEffect, useRef } from 'react'

const CommentsForm = ({ slug }) => {

  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmit = () =>{

  }

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
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input 
          type="text" 
          ref={nameEl} 
          placeholder='Name'
          name='name'
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
        <input 
          type="text" 
          ref={nameEl} 
          placeholder='Email'
          name='email'
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
      </div>
      {error && <p className='text-xs text-red-600'>All fields are required</p>}
      <div className='flex align-middle justify-center mt-8'>
        <button
          type='button'
          onClick={handleCommentSubmit}
          className='transition duration-500 ease hover:bg-indigo-400 inline-block  bg-pink-500 hover:text-white text-lg rounded-full px-10 py-4 cursor-pointer'
        >
          Post Comment
        </button>
        {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submitted for review</span>}
      </div>
    </div>
  )
}

export default CommentsForm