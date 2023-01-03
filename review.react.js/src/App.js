import React from "react";
import Data from "./pages/Data";
import Login from "./pages/loginpage/Login";
import{ store } from "./pages/redux/store";
import {Provider} from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="Data" element={<Data />}></Route>
            <Route path="*" element={<Navigate to={"/"} />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
