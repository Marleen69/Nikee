import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Shoes from './pages/Shoes';
import Apparel from './pages/Apparel';
import Jackets from './pages/Jackets';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35, ease: 'easeOut' }}
    className="min-h-[70vh]"
  >
    {children}
  </motion.div>
);

export default function Router() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/shoes"
          element={
            <PageTransition>
              <Shoes />
            </PageTransition>
          }
        />
        <Route
          path="/apparel"
          element={
            <PageTransition>
              <Apparel />
            </PageTransition>
          }
        />
        <Route
          path="/jackets"
          element={
            <PageTransition>
              <Jackets />
            </PageTransition>
          }
        />
        <Route
          path="/product/:id"
          element={
            <PageTransition>
              <ProductDetail />
            </PageTransition>
          }
        />
        <Route
          path="/cart"
          element={
            <PageTransition>
              <CartPage />
            </PageTransition>
          }
        />
        <Route
          path="/checkout"
          element={
            <PageTransition>
              <Checkout />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

