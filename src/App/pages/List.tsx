import React from 'react'
import ContactsList from '../../ui/ContactsList'
import NormalText from '../../ui/NormalText'
import { Link } from 'react-router-dom'

function List() {
  return (
    <div className="container h-dvh mx-auto flex justify-center">
      <div className='flex flex-col gap-3 w-5/6 py-4'>
        <Link className='rounded-md w-max p-2 bg-btn hover:bg-btn-hovered' to='/'>
          <NormalText content='Go Back' weigth='font-bold' />
        </Link>
        <ContactsList />
      </div>
    </div>
  )
}

export default List