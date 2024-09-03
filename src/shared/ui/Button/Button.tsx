import { FC, ReactNode } from "react"
import cl from './Button.module.scss'

interface ButtonProps {
    children: ReactNode,
    size: 'small' | 'medium' | 'large',
    br: 'medium-rd' | 'large-rd',
    padding:  'padding-small' | 'padding-medium' | 'padding-large',
}

export const Button: FC<ButtonProps> = ({children, size, br, padding }) => {
  return (
   <button className={`${cl.button} ${cl[size]} ${cl[br]} ${cl[padding]}`}>{children}</button>
  )
}
