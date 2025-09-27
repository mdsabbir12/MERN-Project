import React from 'react'
import Card from '../Card'

export default function Body1() {
  return (
    <div className='flex gap-4 flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32 '>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}
