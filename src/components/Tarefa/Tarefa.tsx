import style from './tarefa.module.css'
import toDo from '../../images/toDo.svg'
import doneImg from '../../images/done.svg'
import trash from '../../images/trash.svg'
import { useState, useEffect } from 'react'


export function Tarefa({content, status} : any){
    const [imagem, setimagem] = useState(toDo)

    useEffect(() => {
        if(status == true){
            setimagem(doneImg)
        }
    }, [])
    


    return(
        <div className={style.tarefaContainer}>
            <div className={style.conteudo}>
                <img src={imagem} alt='status da tarefa'  />
                <p>{content}</p>
            </div>
            <div className={style.trash}>
                <img src={trash} alt='excluir tarefa' />
            </div>
        </div>
    )
}