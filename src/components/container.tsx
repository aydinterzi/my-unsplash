import React from 'react'

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className='px-24'>{children}</div>
  )
}

export default Container