
import { useEffect } from 'react';
import Login from './component/Login/Login';
import Register from './component/Login/Register';
import NoteList from './component/notelist/NoteList';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const userId = parseInt(sessionStorage.getItem('userId'), 10);
    const currentPath = window.location.pathname;

    if ((isNaN(userId) || userId === null) && currentPath === '/notelist') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<NoteList />} />
        <Route path='/register' element={<Register />} />
        <Route path='/notelist' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
