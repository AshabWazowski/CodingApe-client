import CardComponent from '@/components/customComponent/CardComponent'
import React from 'react'

const CardItem = () => {
  return (
    <div className='h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-2'>
     <CardComponent/>
     <CardComponent/>
     <CardComponent/>
     <CardComponent/>
     <CardComponent/>
    </div>
  )
}

export default CardItem
