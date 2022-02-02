import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/home/Home';

// Components
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
