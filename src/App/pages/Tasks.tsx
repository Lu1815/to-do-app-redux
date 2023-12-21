import React, { useState } from 'react'
import { Button } from '../../ui/Button'
import NormalText from '../../ui/NormalText';
import CardsList from '../../ui/CardsList';
import { useAppSelector } from '../redux/Hooks';
import { ITodoState } from '../redux/TodosSlice';
import { Link } from 'react-router-dom';
import CreateTaskModal from '../../ui/CreateTaskModal';

function Tasks() {
  const todos: ITodoState[] = useAppSelector((state) => state.todos)
  const [showModal, setShowModal] = useState<boolean>(false);
  const modalProps = { showModal, setShowModal };

  const onClick = () => {
    setShowModal(!showModal)
  }

  return (
    <div className="container h-dvh mx-auto flex justify-center">
      <div className='flex flex-col gap-3 w-5/6 py-4'>
        <Link className='rounded-md w-max p-2 bg-btn hover:bg-btn-hovered' to='/'>
          <NormalText content='Go Back' weigth='font-bold'/>
        </Link>
        <Button onClick={onClick} text='New Task'/>
        <CardsList todosList={todos} />
        <CreateTaskModal {...modalProps} />
      </div>
    </div>
  )
}

export default Tasks