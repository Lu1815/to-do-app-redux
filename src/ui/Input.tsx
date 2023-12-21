import { clsx } from 'clsx';
import React, { Dispatch, SetStateAction } from 'react'

interface IInputProps {
    taskName?: string;
    setTaskName: Dispatch<SetStateAction<string>>;
    error: boolean;
    setError: Dispatch<SetStateAction<boolean>>;
}

const Input = ({ taskName, setTaskName, error, setError}: IInputProps) => {
    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setError(false);
        const taskName = event.currentTarget.value;

        setTaskName(taskName);
    }

    return (
        <input 
            id="task-name" 
            type='text' 
            className={clsx('rounded-md p-2 border-gray-200 border-2 outline-none placeholder:text-gray-600 text-black', error ?? 'shake-animation border-red')} 
            placeholder='Task Name...'
            value={taskName}
            onChange={handleChange}
        />
    )
}

export default Input