import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({id, flag, name, continent}) => {
  
  return (
    
    <Link to={`/detail/${id}`}>
           <div className={style.CardMainContainer}>
            <img src={flag} alt="" />
            <h4>{name}</h4>
            <p>{continent}</p>
          </div>
    </Link>

  )
}

export default Card