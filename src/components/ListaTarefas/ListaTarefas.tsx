import style from './lista.module.css'
import clipboard from '../../images/Clipboard.svg'
import { Tarefa } from '../Tarefa/Tarefa'

export function ListaTarefas() {
  const tarefas = [
    {
      id: 0,
      texto: '1',
      done: false
    },
    {
      id: 1,
      texto: '2',
      done: true
    },
    {
      id: 2,
      texto: '3',
      done: false
    }
  ]

  return (
    <>      
      <div className={style.containerInput}>
        <input type="text" placeholder="digite uma tarefa" /> 
        <button className={style.buttonAdicionar}>Add +</button>
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
              tarefas?.map(tarefa => <Tarefa status={tarefa.done} key={tarefa.id} content={tarefa.texto} done={tarefa.done} />) 
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