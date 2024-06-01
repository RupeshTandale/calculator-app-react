import './Button.css';

const Button = (props) =>{


    return(
        <div>
            <button type="button" className="btn" onClick={props.btFun} >{props.btnName}</button>
        </div>
    )
}

export default Button;