import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "context/cart-context";
import AmountButtons from "./AmountButtons";
import { SingleProduct } from "types/single-product";

const AddToCart = ({ product }: { product: SingleProduct }) => {
  const [colorIndex, setColorIndex] = useState(0);
  const [count, setCount] = useState(1);
  const { addCart } = useCartContext();

  const increase = () =>
    count + 1 <= product.stock ? setCount(count + 1) : setCount(product.stock);

  const decrease = () => (count - 1 >= 1 ? setCount(count - 1) : setCount(1));

  const onAddToCart = () =>
    addCart({
      product,
      amount: count,
      color: product.colors[colorIndex],
      id: product.id,
    });

  return (
    <Wrapper>
      <div className="colors">
        <span>colors: </span>
        <div>
          {product.colors.map((color, index) => (
            <button
              key={index}
              style={{ backgroundColor: color }}
              className={`${
                index === colorIndex ? "color-btn active" : "color-btn"
              }`}
              onClick={() => setColorIndex(index)}
            >
              {index === colorIndex && <FaCheck />}
            </button>
          ))}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons count={count} decrease={decrease} increase={increase} />
        <Link to="/cart" onClick={onAddToCart} className="btn">
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
