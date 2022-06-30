import style from './tarefa.module.css'
import toDo from '../../images/toDo.svg'
import doneImg from '../../images/done.svg'
import trash from '../../images/trash.svg'
import { useState, useEffect } from 'react'

export function Tarefa({content, status, id, tarefas} : any){
    const [imagem, setimagem] = useState(toDo)

    function handleToggleTask(){
        if(imagem == toDo){
            setimagem(doneImg)
        }else{
            setimagem(toDo)
        }
    }

    const handleDeleteTask = (id: number) =>{
        // const taskList = tarefas.filter(task => task.id !== id);
        // setTasks(taskList);

        console.log(tarefas)
    }


    useEffect(() => {
        if(status == true){
            setimagem(doneImg)
        }
    }, [])
    

    return(
        <div className={style.tarefaContainer}>
            <div className={style.conteudo}>
                <img onClick={handleToggleTask} src={imagem} alt='status da tarefa'  />
                <p>{content}</p>
            </div>
            <div className={style.trash}>
                <img onClick={() => handleDeleteTask(id)} src={trash} alt='excluir tarefa' />
            </div>
        </div>
    )
}