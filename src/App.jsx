import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { default as CaneSupplierLayout } from './pages/caneSupplierForm/FormLayout';
import Home from './pages/Home';
import { Address, Billing, General } from './pages/caneSupplierForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* Cane Supplier Form */}
        <Route
          path="/cane-supplier"
          element={<CaneSupplierLayout></CaneSupplierLayout>}
        >
          <Route index element={<General></General>}></Route>
          <Route path="address" element={<Address></Address>}></Route>
          <Route path="billing" element={<Billing></Billing>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
