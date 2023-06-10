import style from './NewTasks.module.css'
import btnPlus from '../assets/plus.svg'

export function NewTasks (){
  return (
    <div className={style.newTasks}>
    <input className={style.tasks} placeholder='Adicione uma nova tarefa'></input>
    <button className={style.buttonNewTasks}>Criar<img src={btnPlus} alt="Imagem de sinal de adição" /></button>
    </div>
  )
}