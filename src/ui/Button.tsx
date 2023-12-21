import clsx from "clsx"

interface IButtonProps {
    onClick: () => void,
    text?: string,
    textColor?: string,
    fontWeight?: string,
    backgroundColor?: string,
    className?: string,
}

export const Button = ({ onClick, text, textColor, fontWeight, backgroundColor, className }: IButtonProps) => {
    
    const handleClick = () => {
        onClick();
    }

    return (
        <button className={
            clsx(
                className,
                'rounded-md px-3 py-2',
                (backgroundColor ?? 'bg-btn'),
                (textColor ?? 'text-white'),
                (fontWeight ?? 'font-normal')
            )}
            onClick={handleClick}
        >
            {text ?? 'Button'}
        </button>
    )
}