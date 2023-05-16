import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Routes } from 'react-router-dom';
import Cards from './components/card';
import CardDetails from './components/cardDetails';


function App() {
  return (
    <div >
<Header/>
<Routes>
<Route path='/card' element={<CardDetails/>} />
  <Route path='/' element={<Cards/>} />
</Routes>
    </div>
  );
}

export default App;
