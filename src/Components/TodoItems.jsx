import './CSS/TodoItems.css'
import tick from './Assets/tick.png'
import cross from './Assets/cross.png'
import not_tick from './Assets/not_tick.png'
const TodoItems = ({no, display, text}) => {

    const dlt = () => {
            document.querySelector(`.todo-item-${no}`).style.display = "none";
    }
    const toggle = () => {
        if(display === ""){
            document.querySelector(`.todo-item-${no} .todos-items-container img`).src = tick;
            document.querySelector(`.todo-item-${no} .todo-item-text`).classList.add("line-through");
            
        } else{
            document.querySelector(`.todo-item-${no} .todos-items-container img`).src = not_tick;
            document.querySelector(`.todo-item-${no} .todo-item-text`).classList.remove("line-through");
        }
    }
  return (
    <div className={`todo-Items todo-item-${no}`}>
        <div  className="todos-items-container" >
           <div className="toggle" onClick={toggle}>
            {display === ""?  <img src={not_tick} alt="not tick" />: <img src={tick} alt="tick" />}
            </div>
            <div className={`todo-item-text ${display === "checked" ? "line-through" : ""}`}>
                {text}
            </div>
        </div>

        <img onClick={dlt} className='todoscross-icon' src={cross} alt="cross" />
    </div>
  )
}


export default TodoItems
