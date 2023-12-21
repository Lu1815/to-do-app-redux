import clsx from 'clsx'

interface IHeaderOneProps {
    content?: string,
    color?: string,
    weigth?: string
}

const HeaderOne = ({ content, color, weigth }: IHeaderOneProps) => {
  return (
    <p className={
        clsx(
            'text-lg',
            (color ?? 'text-black'),
            (weigth ?? 'font-normal')
        )
    }>
        { content ?? 'Normal Text' }
    </p>
  )
}

export default HeaderOne