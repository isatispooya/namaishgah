import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../modules/admin/featuers';
import AddClient from '../modules/admin/featuers/AddClient';


function Section() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/AddClient" element={<AddClient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Section;
