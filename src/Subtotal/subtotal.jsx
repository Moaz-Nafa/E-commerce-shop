import React from "react";
import CurrencyFormat from "react-currency-format";
import "./subtotal.css";
import { useAuth } from "../ContextApi/globalState";
import { getBasketTotal } from "../ContextApi/reducer";

const Subtotal = () => {
  const { basket } = useAuth();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

    </div>
  );
};

export default Subtotal;
