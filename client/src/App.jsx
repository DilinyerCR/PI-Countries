import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import SearchBar from './components/SearchBar/SearchBar';
import Detail from './components/Detail/Detail';
import Activity from './components/Activity/Activity';

const App = () => {

  const { pathname } = useLocation();

  return (

    <div>

      {pathname !== '/' && <SearchBar />}

      <Routes>
        <Route path='/' element={<Landing />} />

        <Route path='/home' element={<Home />} />

        <Route path='/detail/:id' element={<Detail />}/>

        <Route path='activity' element={<Activity />}/>

      </Routes>
    </div>
  )
}

export default App;
