import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormLayout from './pages/caneSupplierForm/FormLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLayout></FormLayout>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
