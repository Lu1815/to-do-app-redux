import clsx from 'clsx'

interface INormalTextProps {
    content?: string,
    color?: string,
    weigth?: string
}

const NormalText = ({ content, color, weigth }: INormalTextProps) => {
  return (
    <p className={
        clsx(
            (color ?? 'text-black'),
            (weigth ?? 'font-normal')
        )
    }>
        { content ?? 'Normal Text' }
    </p>
  )
}

export default NormalText