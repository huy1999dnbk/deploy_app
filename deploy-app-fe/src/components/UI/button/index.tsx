import { ReactNode } from "react"

interface IButton {
    onClick: () => void,
    className?: string,
    children: ReactNode
}

const Button = (props: IButton) => {
    const { onClick, className, children} = props
    return <button onClick={onClick} className={`${className}`}>
        {children}
    </button>
}

export default Button