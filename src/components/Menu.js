import React, { useState } from 'react';
import recipes from '../recipes';
import Swal from 'sweetalert2';

const Menu = () => {

    const handleOrder = (id) => {
        console.log(id);
        Swal.fire({
            title: "Would you like to confirm your order?",
            text: "You will not be able to revert this!",
            icon: "warning",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, submit order!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your order has been processed.",
                icon: "Success."
              });
            }
          });
    }

    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This weeks specials!</h2>
                <button>Order Menu</button>               
            </div>
        

            <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>${recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Menu;