import './App.css';
import { Routes, Route } from 'react-router-dom';  
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
 
function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
