import styles from './ListTasks.module.css'
import clipBoard from '../assets/Clipboard.svg'
import trash from '../assets/trash.svg'

export function ListTasks() {
  return (
    <article>
      <section className={styles.info}>
        <img src={clipBoard} />
        <p><strong>Você ainda não tem tarefas cadastradas</strong><br />
          Crie tarefas e organize seus itens a fazer</p>
      </section>
      <section className={styles.ListTasks}>
        <div className={styles.boxRadio}>
        <input type='radio' />
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        <img src={trash} />
        </div>
      </section>
    </article>
  )
}