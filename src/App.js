import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import About from './Component/About';
import FormInput from './Component/FormInput';
import SecondForm from './Component/SecondForm';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/FormInput' element={<FormInput/>} />
  <Route path='/About' element={<About/>}/>
  <Route path='/SecondForm' element={<SecondForm/>}/>
</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
