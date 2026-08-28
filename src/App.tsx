import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result/:id" element={<Result/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
}

export default App;
