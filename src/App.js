import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// import boostrap module
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './landingpage';
import Home from './home';
import Subcribe from './subcribe';
import Profile from './profile';
import DetailBook from './detailBook';
import AddDetail from './detailBook2';
import ReadBook from './readbook';
import ListTransaksi from './listTransaksi';
import AddBook from './addBook';
import HomeSubcribe from './homeSubcribe';
import Register from './signUp';
import Login from './signIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/successubcribe" element={<HomeSubcribe />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/signIn" element={<Login />} />
        <Route exact path="/signUp" element={<Register />} />
        <Route exact path="/subcribe" element={<Subcribe />} />
        <Route exact path="/detailbook" element={<DetailBook />} />
        <Route exact path="/succesaddbook" element={<AddDetail />} />
        <Route exact path="/readbook" element={<ReadBook />} />
        <Route exact path="/listtransaksi" element={<ListTransaksi />} />
        <Route exact path="/addbook" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;
