import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResultPage from './pages/Result';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
}

export default App;
