import { Route, Routes } from 'react-router-dom';
import Dos from './pages/Dos';
import Bios from './pages/Bios';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Bios />} path='/Bios' />
        <Route element={<Dos />} path='/Dos' />
      </Routes>
    </>
  );
}

export default App;
