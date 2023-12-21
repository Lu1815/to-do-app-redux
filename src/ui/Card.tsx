import React from 'react'
import HeaderOne from './HeaderOne'

interface ICardProps {
    text?: string
}

const Card = ({text}: ICardProps) => {
  return (
    <div className='w-full py-2 px-3 border-gray-200 border-2 rounded-md'>
        <HeaderOne content={text ?? 'Card Text'} />
    </div>
  )
}

export default Card