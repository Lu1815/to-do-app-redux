import Card from './Card'
import { ITodoState } from '../App/redux/Index'

interface ICardsListProps {
    todosList: ITodoState[],
}

const CardsList = ({todosList}: ICardsListProps) => {
  return (
    <div className='flex flex-col justify-center gap-2 py-3'>
        {
          todosList.length === 0 ? <h1>There are no tasks yet...</h1>
          :
            todosList.map((todoItem) => (
                <Card text={todoItem.name} key={todoItem.id}/>
            ))
        }
    </div>
  )
}

export default CardsList