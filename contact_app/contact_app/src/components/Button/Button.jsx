import style from './button.module.css'
const Button = (props) => {
    console.log(props)
  return (
    <button {...props} className={props.isOutLined ? style.secondary_btn : style.primary_btn}>
      {props?.icon} {props?.text}
    </button>
  )
}

export default Button