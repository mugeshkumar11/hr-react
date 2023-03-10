import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import "./data.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./redux/cartslice";
const Data = () => {
  const [user, setUser] = useState([]);

  //
  const dispatch = useDispatch();

  // dispatch(addtocart([...state.cartitem]))
  // console.log(state);

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

  const handleaddtocart = (product) => {
     dispatch(addtocart(product))

  }

  return (
    <div>
      <Home/>
      <section className="content">
        <section className="container">
          <div className="flex">
            {user?.map((product) => (
              <div className="media">
                <div className="imagedata">
                  <img src={product.image}></img>
                </div>
                <div className="detailsindata">
                  <div className="datacontent">
                    <h3>{product.name}</h3>
                    <h4>{product.price}</h4>
                    <h5>{product.ratings}/<span><StarBorderIcon/></span></h5>
                    <div className="addbtn">
                    <Button variant="contained" onClick={() => handleaddtocart (product)} >ADD TO CART</Button>
                    </div> 
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
