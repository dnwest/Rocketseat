import { Header } from './components/Header'
import { NewTasks } from './components/NewTasks'
import { Main } from './components/Main'
import { ListTasks } from './components/ListTasks'
import './global.css'

function App() {

  return (
    <>
      <Header />
      <NewTasks />
      <Main />
      <ListTasks />
    </>
  )
}

export default App
