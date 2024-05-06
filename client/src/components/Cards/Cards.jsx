import style from './Cards.module.css';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

const Cards = () => {

  const allCountries = useSelector((state) => state.allCountries);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allCountries.slice(startIndex, endIndex);

  return (
    <div className={style.CardsMainContainer}>
      {
        currentItems?.map((country) => {
          return <Card 
          key={country.id}
          id={country.id}
          flag={country.flag}
          name={country.name}
          continent={country.continent}
          />
        })
      }
    </div>
  )
}

export default Cards