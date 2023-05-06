import './App.css';
import NavbarComponent from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Store from './Pages/Store';
import Cancel from './Pages/Cancel';
import Success from './Pages/Success';
import CartProvider from './Utils/CartContext';
import AdminPage from './Pages/AdminPage';

function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent />
        <Router>
          <Routes>
            <Route index element={<Store />} />
            <Route path='success' element={<Success />} />
            <Route path='cancel' element={<Cancel />} />
            <Route path='admin' element={<AdminPage />} />
          </Routes>
        </Router>
      </Container>
    </CartProvider>
  );
}

export default App;
