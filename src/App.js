import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsPage from './Components/ProductsPage/ProductsPage';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<LandingPage/>}></Route>
      <Route path={"/products"} element={<ProductsPage/>}></Route>
    </Routes>
  );
}

export default App;
