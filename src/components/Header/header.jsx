import style from './header.module.css';
import igniteLogo from '../../assets/Ignite simbol.svg';

export function Header() {
    return (
        <header className={style.header}>
            <img src={igniteLogo} alt="Ignite Simbol" />
            <strong>Ignite Feed</strong>
        </header>
    )
}