import style from './Landing.module.css';
import { Link } from "react-router-dom"
import GitHub from '../../assets/github.png';
import LinkedIn from '../../assets/linkedin.png';

const Landing = () => {

    return (
        <div className={style.LandingMainSection}>
            <div>
                <h1 className={style.LandingMainTiitle}>Adventure World:</h1>
                <h2 className={style.LandingSecondTitle}>Country information and activities</h2>
                <p className={style.LandingDescription}>Embárcate en un viaje virtual alrededor del mundo con "Adventure World", tu guía completa para explorar países y planificar aventuras inolvidables, Sumérgete en un tesoro de información sobre cada país.</p>
            </div>

            <div className={style.LandingInfoContainer}>

                <div className={style.LandingButtonContainer}>
                    <Link to='/home'>
                        <button>INICIO</button>
                    </Link> 
                </div>

                <div className={style.LandingSocialMediaContainer}>
                    <p>Proyecto Individual de HENRY</p>
                    <a href=""> <img src={GitHub} alt="GitHub" /> </a>
                    <a href=""> <img src={LinkedIn} alt="LinkedIn" /> </a>
                </div>
            </div>
            
        </div>
    )
}

export default Landing