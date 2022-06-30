import style from './lista.module.css'
import clipboard from '../../images/Clipboard.svg'
import { Tarefa } from '../Tarefa/Tarefa'
import { useState } from 'react'

interface Tarefa{
  id: Number,
  content: string,
  isDone: boolean
}

export function ListaTarefas({}) {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [tarefaContent, setTarefaContent] = useState('');

  function handleCriarTarefa(){
    const id = Math.random();
    if(!tarefaContent){
      return 
    }

    const tarefa = {
      id, 
      content: tarefaContent,
      isDone: false
    }

    setTarefas([...tarefas, tarefa])
    setTarefaContent('')
  }


  return (
    <>      
      <div className={style.containerInput}>
        <input onChange={(e) => setTarefaContent(e.target.value)} value={tarefaContent} type="text" placeholder="digite uma tarefa" /> 
        <button onClick={handleCriarTarefa} className={style.buttonAdicionar}>Add +</button>
      </div>

      <div className={style.containerTarefas}>
        <header>
          <div className={style.tarefasCriadasContador}>
            <p>Tarefas criadas</p>
            <span>0</span>
          </div>

          <div className={style.tarefasConcluidasContador}>
            <p>Concluídas</p>
            <span>0 de 0</span>
          </div>
        </header>
        <section>
          {tarefas && tarefas.length > 0 ? 
              tarefas?.map(tarefa => <Tarefa {...tarefas} id={tarefa.id} status={tarefa.isDone} key={tarefa.id} content={tarefa.content} done={tarefa.isDone} />) 
            :
            <>
              <img src={clipboard} alt="Nenhuma tarefa cadastrada" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </> 
          }
        </section>
      </div>
    </>
  )
}