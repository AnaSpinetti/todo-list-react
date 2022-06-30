import { useState } from "react"
import { Header } from "./components/Header"
import {ListaTarefas} from "./components/ListaTarefas/ListaTarefas"
import './globals.module.css'

function App() {

  //const [tarefas, setTarefas] = useState([])

 return (
    <>
      <Header />
      <ListaTarefas  />
    </>
  )
}

export default App
