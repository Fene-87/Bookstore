import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './pages/Books/Books';
import Categories from './pages/Categories/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
