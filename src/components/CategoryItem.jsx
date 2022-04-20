import styled from "styled-components";
import { mobile } from "../responsive";
import React from 'react'
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "48vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:black;
    font-size: 20px;
    margin-bottom: 350px;
    cursor: pointer;
    ${mobile({ top: "0vh" })}
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Link to="/productlist"><Title>{item.title}</Title></Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;