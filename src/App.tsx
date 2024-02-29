import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { RequireAuth } from './configs/RequireAuth';
import { User } from './pages/User/User';
import { Employee } from './pages/Employee/Employee';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/registrar' element={<Register />}></Route>
        <Route path='/usuario' element={<RequireAuth><User /></RequireAuth>}></Route>
        <Route path='/funcionario' element={<RequireAuth><Employee /></RequireAuth>}></Route>
      </Routes>
    </div>
  )
}

export default App