import { PageHero } from "components";
import styled from "styled-components";

export const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page"></Wrapper>
    </main>
  );
};
const Wrapper = styled.div``;
