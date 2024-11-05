// import './App.css'

import { Route, Routes } from "react-router-dom";
import Contacts from "./Components/Contacts";
import EditContact from "./Components/EditContact";
import AddContact from "./Components/AddContact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/edit" element={<EditContact />} />
        <Route path="/add" element={<AddContact />} />
      </Routes>
    </>
  );
}

export default App;
