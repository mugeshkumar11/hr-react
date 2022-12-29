import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import "./data.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Home from "./Home"
const Data = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchto();
  }, []);
  const fetchto = async () => {
    await axios
      .get("http://localhost:5000/data")
      .then((json) => setUser(json.data));
    console.log(user);
  };

  console.log(user);

  return (
    <div>
      <Home/>
      <section className="content">
        <section className="container">
          <div className="flex">
            {user.map((item, index) => (
              <div className="media">
                <div className="imagedata">
                  <img src={item.image}></img>
                </div>
                <div className="detailsindata">
                  <div className="datacontent">
                    <h3>{item.name}</h3>
                    <h4>{item.price}</h4>
                    <h5>{item.ratings}/<span><StarBorderIcon/></span></h5>
                  </div>
                  <div className="addbtn">
                    <Button variant="contained">ADD +</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Data;
