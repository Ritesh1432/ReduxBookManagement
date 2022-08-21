import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Book from './components/Book';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Book />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
