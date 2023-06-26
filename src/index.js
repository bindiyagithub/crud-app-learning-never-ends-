import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Create_Insert from './components/Create_Insert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read_Display from './components/Read_Display';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    

    <BrowserRouter>
       <Routes>
          <Route path='/' element={ <Read_Display/> } />
          <Route path='/Create_Insert' element = {<Create_Insert/>}/>
       </Routes>
    </BrowserRouter>

</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
