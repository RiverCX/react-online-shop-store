import { PageHero } from "components";
import styled from "styled-components";
import { useCartContext } from "context/cart-context";
import StripeCheckout from "../components/StripeCheckout";
import { Link } from "react-router-dom";

export const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {cart.length ? (
          <StripeCheckout />
        ) : (
          <div className="empty">
            <h2>your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
