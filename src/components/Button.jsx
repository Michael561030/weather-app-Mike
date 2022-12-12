
export function Button({onCLickHandler, title, className}) {
    return(
        <button
            onClick={onCLickHandler}
            className={className}
        >{title}</button>
    )
}