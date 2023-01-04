import React from "react";
import "./delivery.css";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import { Button } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Delivery = () => {
  const dispatch = useDispatch();
  const state = useSelector((data) => data).cart;

  console.log(state, "state");
  return (
    <div>
      <Home />
      <section className="content">
        <section className="container">
          <div className="flex">
            {state.cartitem.map((product) => (
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
                    <Button variant="contained" color="error">
                      Delete
                    </Button>
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

export default Delivery;
