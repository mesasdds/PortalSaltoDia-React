import {Link} from 'react-router-dom'
import styles from './layoutcss/Navbar.module.css'
import Container from './Container'


function Navbar(){
    return(
            <div>
                <header>
                    <div className={styles.nav_principal}>
                        <ul>
                            <li id={styles.home}><Link to={"/home"}>Home</Link></li>
                            <li id={styles.noticias}><Link to={"/"}>Noticias</Link></li>
                            <li id={styles.esports}><Link to={"/esports"}>Esports</Link></li>
                            <li id={styles.pop}><Link to={"/pop"}>Pop</Link></li>
                            <li id={styles.geek}><Link to={"/geek"}>Geek</Link></li>
                            <li id={styles.artigos}><Link to={"/artigos"}>Artigos</Link></li>
                            <li id={styles.login}><Link>Login</Link></li>
                        </ul>
                    </div>
                    <nav className={styles.nav_bar}>
                        <div className={styles.div_button}>
                            <div className={styles.bar1}></div>
                            <div className={styles.bar1}></div>
                            <div className={styles.bar1}></div>
                            <p className={styles.menu_title}>MENU</p>
                        </div>
                        <ul>
                            <li>Olá</li>
                            <li>Xau</li>
                            <li>Adeus</li>
                        </ul>
                        
                    </nav>
                </header>
            </div>
    )
}

export default Navbar

