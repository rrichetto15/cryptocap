import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/home/Home';
import Details from './pages/details/Details';

// Components
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Details />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
