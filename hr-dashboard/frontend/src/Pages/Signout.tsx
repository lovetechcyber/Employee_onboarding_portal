import React from "react";
import Button from "../Components/Button";
import styled from "styled-components";

const Signout = () => {
  return (
    <SignoutWrapper>
      <SignoutBtn children="Sign out" />
    </SignoutWrapper>
  );
};

export default Signout;

const SignoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SignoutBtn = styled(Button)`
  background-color: #327fff;
  color: #fff;
  padding: 1rem 3rem;
  border-radius: 0.2rem;
  font-size: 1.5rem;
`;
