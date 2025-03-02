import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { default as CaneSupplierLayout } from './pages/caneSupplierForm/FormLayout';
import Home from './pages/Home';
import { Address, Billing, General } from './pages/caneSupplierForm';
import { default as CaneTripLayout } from './pages/caneTripForm/Structure';
import {
  BasicDetails,
  CaneAndPlotInfo,
  CaneWeight,
  Deduction,
  LocationAndVehicle,
  Output,
  TripAndRemarks,
} from './pages/caneTripForm';
import CaneTripForm from './pages/caneTripForm/CaneTripForm';

export const BASE_URL = 'http://localhost:8087/';
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

        {/* Cane Trip Form */}
        <Route path="/cane-trip" element={<CaneTripForm />}>
          <Route index element={<BasicDetails />} />
          <Route path="caneAndPlotInfo" element={<CaneAndPlotInfo />} />
          <Route path="locationAndVehicle" element={<LocationAndVehicle />} />
          <Route path="caneWeight" element={<CaneWeight />} />
          <Route path="deduction" element={<Deduction />} />
          <Route path="tripAndRemarks" element={<TripAndRemarks />} />
          <Route path="output" element={<Output />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
