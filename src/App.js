import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import Contact from './pages/Contact/Contact';
import Deliver from './pages/deliver/deliver';
import ShowRoom from "./pages/showRoom/ShowRoom"
import Home from './pages/Home/Home';
import Like from './pages/Like/Like';
import Zakaz from './pages/Zakaz/Zakaz';
import './sass/style.scss'
import Primerka from './pages/Primerka/Primerka';
import Obmen from './pages/deliver/obmen';
// import YandexMaps from './Components/YandexMaps/YandexMaps';
import Voz from './pages/deliver/voz';
import Pay from './pages/deliver/pay';
import Modal24 from './pages/modal/modal24';
import Register from './pages/Register/Register';
import LoginPage from './pages/Login/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='deliver' element={<Deliver />} />
          <Route path='like' element={<Like />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='showRoom' element={<ShowRoom />} />
          <Route path='Primerka' element={<Primerka />} />
          <Route path='zakaz' element={<Zakaz />} />
          <Route path='obmen' element={<Obmen />} />
          <Route path='voz' element={<Voz />} />
          <Route path='pay' element={<Pay />} />
          <Route path='size' element={<Modal24 />} />
        </Route>
        <Route path='loginPage' element={<LoginPage />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
