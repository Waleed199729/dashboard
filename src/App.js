import { BrowserRouter } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Dashboard />
        <Footer/ >
      </BrowserRouter>
    </>
  );
}

export default App;
