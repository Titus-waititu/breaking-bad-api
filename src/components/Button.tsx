interface ButtonProps {
    text:string;
    OnClick:()=>void
}
function Button({text,OnClick}:ButtonProps) {
  return (
    <div>
        <button onClick={OnClick}>
            {text}
        </button>
    </div>
  )
}

export default Button