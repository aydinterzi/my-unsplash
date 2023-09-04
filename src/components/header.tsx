"use client";
import React from 'react'
import AddPhoto from './add-photo';

function Header() {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <header className='flex justify-between items-center mt-10'>
        <div className='flex gap-8'>
          <div className='flex flex-col'><h1 className='font-extrabold text-sm text-black'>My Unsplash</h1><p className='font-medium text-xs'>devchallenges.io</p></div>
          <input type="text" />
        </div>
        <button className='p-4 bg-green-600 rounded-xl text-white' onClick={() => setOpen(true)}>Add a photo</button>
      </header>
      {open && <AddPhoto setOpen={setOpen} />}
    </>
  )
}

export default Header