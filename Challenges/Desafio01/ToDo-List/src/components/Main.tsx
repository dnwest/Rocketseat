import styles from './Main.module.css'

export function Main(){
  return (
    <main>
      <div className={styles.boxInfoTasks}>
      <div className={styles.tasksCreated}>Tarefas criadas <span>0</span></div>
      <div className={styles.done}>Concluídas <span>0</span></div>
      </div> 
    </main>
  )
}