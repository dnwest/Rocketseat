import styles from './Main.module.css'
import clipBoard from '../assets/Clipboard.svg'

export function Main(){
  return (
    <main className={styles.main}>
      <div className={styles.boxInfoTasks}>
      <div className={styles.tasksCreated}>Tarefas criadas <span>0</span></div>
      <div className={styles.done}>Concluídas <span>0</span></div>
      </div> 
      <section>
        <article className={styles.info}>
        <img src={clipBoard}/>
          <p><strong>Você ainda não tem tarefas cadastradas</strong><br/>
            Crie tarefas e organize seus itens a fazer</p>
            </article>
      </section>
    </main>
  )
}