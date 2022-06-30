import style from './header.module.css';
import logo from '../images/Logo.svg'

export function Header(){
    return (
        <div className={style.header}>
            <img src={logo} alt="Logotipo da aplicação" className={style.logo} />
        </div>
    )
}