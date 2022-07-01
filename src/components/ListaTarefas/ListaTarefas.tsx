import style from './lista.module.css'
import clipboard from '../../images/Clipboard.svg'
import trash from '../../images/trash.svg'
import toDo from '../../images/toDo.svg'
import doneImg from '../../images/done.svg'
import { useState, useEffect } from 'react'

interface Tarefa{
  id: Number,
  content: string,
  isDone: boolean
}

export function ListaTarefas({}) {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [conteudoNovaTarefa, setConteudoNovaTarefa] = useState('');
  const [imagem, setimagem] = useState(toDo);

  function handleCriarTarefa(){
    const id = Math.random();
    if(!conteudoNovaTarefa){
      return
    }

    const tarefa = {
      id, 
      content: conteudoNovaTarefa,
      isDone: false
    }

    setTarefas([...tarefas, tarefa])
    setConteudoNovaTarefa('');
  }

  function handleToggleTarefaCompleta(id: Number){
    const listaTarefas = tarefas.map(tarefa => {
      if(tarefa.id === id){
        tarefa.isDone = !tarefa.isDone

        if(tarefa.isDone == true){
          setimagem(doneImg)
        }else{
          setimagem(toDo)
        }
    
      }



      return tarefa
    })


    setTarefas(listaTarefas)
  }

  function handleDeletarTarefa(id: Number){
    const listaTarefas = tarefas.filter(tarefa => tarefa.id !== id);

    setTarefas(listaTarefas);
  }
  
  const feitas = tarefas.map(tarefa => tarefa.isDone === true)

  return (
    <>      
      <div className={style.containerInput}>
        <input onChange={(e) => setConteudoNovaTarefa(e.target.value)} value={conteudoNovaTarefa} type="text" placeholder="digite uma tarefa" /> 
        <button onClick={handleCriarTarefa} className={style.buttonAdicionar}>Add +</button>
      </div>

      <div className={style.containerTarefas}>
        <header>
          <div className={style.tarefasCriadasContador}>
            <p>Tarefas criadas</p>
            <span>{tarefas.length}</span>
          </div>

          <div className={style.tarefasConcluidasContador}>
            <p>Concluídas</p>
            <span> {feitas.length} de {tarefas.length}</span>
          </div>
        </header>
        <section>
          {tarefas && tarefas.length > 0 ? 
              tarefas?.map(tarefa => 
                <div className={style.tarefaContainer}>
                <div className={style.conteudo}>
                    <img src={imagem} alt='status da tarefa' onClick={() => handleToggleTarefaCompleta(tarefa.id)} />
                    <p>{tarefa.content}</p>
                </div>
                <div className={style.trash}>
                    <img onClick={() => handleDeletarTarefa(tarefa.id)} src={trash} alt='excluir tarefa' />
                </div>
            </div>
            ) 
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
