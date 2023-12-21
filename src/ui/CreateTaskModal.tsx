import { Dispatch, SetStateAction, useState } from "react";
import Input from "./Input";
import { useAppDispatch, useAppSelector } from "../App/redux/Hooks";
import { ITodoState, create } from "../App/redux/TodosSlice";
import { ToastContainer, toast } from "react-toastify";
import { ErrorNotification } from "../lib/Notifications";

const DEFAULT_INT = 0;

interface ICreateCardModalProps {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const CreateTaskModal = ({ showModal, setShowModal }: ICreateCardModalProps) => {
    const todos: ITodoState[] = useAppSelector((state) => state.todos)
    const dispatch = useAppDispatch()
    const [taskName, setTaskName] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const inputProps = { taskName, setTaskName, error, setError };

    const handleHideModal = () => {
        setShowModal(false)
    }

    const handleAddTask = () => {
        if (!taskName) {
            ErrorNotification('Task name cannot be empty!')
            setError(true);
            return;
        }

        let todoId: number = DEFAULT_INT;

        if(todos.length <= 0){
            todoId = 1;
        } else {
            todoId = todos[todos.length - 1].id + 1;
        }

        const todoItem: ITodoState = {
            id: todoId,
            name: taskName,
        }

        dispatch(create(todoItem))
        setTaskName("");
        setShowModal(false)
    }

    return (
        <>
            {
                showModal && (
                    <div className="bg-black bg-opacity-50 h-svh w-max">
                        <div id="popup-modal" tabIndex={-1} data-modal-backdrop="static" className="fixed inset-0 flex items-center justify-center h-screen w-screen bg-black bg-opacity-50">
                            <div className="relative p-4 w-full max-w-md max-h-full">
                                <div className="relative bg-white rounded-lg shadow">
                                    <div className="p-4 md:p-5 text-center flex flex-col">
                                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Task Name:</h3>
                                        <Input {...inputProps} />
                                        <div>
                                            <button onClick={handleHideModal} type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2 mt-2">
                                                Cancel
                                            </button>
                                            <button onClick={handleAddTask} type="button" className="bg-btn hover:bg-btn-hovered focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10">
                                                Add Task
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <ToastContainer />
        </>
    )
}

export default CreateTaskModal