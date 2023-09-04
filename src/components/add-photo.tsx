"use client";
import React from 'react'

function AddPhoto({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-8 rounded-xl w-[620px]'>
        <h1 className='font-medium text-2xl mb-5'>Add a new photo</h1>
        <label htmlFor="label">Label</label>
        <input type="text" placeholder='Add a label' className='w-full p-4 border border-black rounded-xl mb-4 mt-2' id='label' />
        <label htmlFor="url" >Photo URL</label>
        <input type="text" placeholder='Add a photo URL' className='w-full p-4 border border-black rounded-xl mt-2' id='url' />
        <div className='flex justify-end items-center mt-8 gap-6'>
          <button className='px-4 py-3  text-gray-500' onClick={() => setOpen(false)}>Cancel</button>
          <button className='px-4 py-3 bg-green-600 rounded-xl text-white'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default AddPhoto