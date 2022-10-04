import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import FrontPage from './Pages/FrontPage/FrontPage/FrontPage';




function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<FrontPage></FrontPage>}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
