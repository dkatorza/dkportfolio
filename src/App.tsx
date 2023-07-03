import { Route, Routes } from 'react-router-dom';
import Dos from './pages/Dos';
import Boot from './pages/Boot';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Boot />} path='/Boot' />
        <Route element={<Dos />} path='/Dos' />
      </Routes>
    </>
  );
}

export default App;
