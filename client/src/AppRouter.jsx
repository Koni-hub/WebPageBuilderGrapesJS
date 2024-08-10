import HomePage from './pages/Home/Home.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter