import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CursorDot from './components/CursorDot';
import Router from './router';
import MainLayout from './layouts/MainLayout';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-black text-white">
          <CursorDot color="#00eaff" />
          <MainLayout>
            <Router />
          </MainLayout>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

