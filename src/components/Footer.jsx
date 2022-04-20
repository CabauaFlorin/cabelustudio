import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";
  import React from 'react'
  import { Link } from "react-router-dom";
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Cabelu's Studio</Link></Logo>
          <Desc>
          Cabelu's Studio Distributor SRL a fost infiintata in 2022 din dorinta de a deveni un partener 
          de incredere oricarui muzician amator sau profesionist prin seriozitate, servicii de calitate si o 
          intelegere deosebita a pietei autohtone. Reprezentam cu mandrie, in Romania, branduri care au schimbat 
          industria muzicala precum Korg, Yamaha, Vox, Ibanez, Marshall, Peavey, Casio sau Vintage. Acum avem un 
          lant propriu de 5 magazine, in curs permanent de dezvoltare, o retea de dealeri in intreaga tara, precum 
          si un magazin online conceput la un standard garantat sa satisfaca orice pretentii. 
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Acces</Title>
          <List>
            <ListItem>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Acasa</Link>
            </ListItem>
            <ListItem>
              <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>Cos de cumparaturi</Link>
            </ListItem>
            <ListItem>Contul meu</ListItem>
            <ListItem>Comenzi</ListItem>
            <ListItem>Lista de dorinte</ListItem>
            <ListItem>Termeni si conditii</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Strada Pescarus, numarul 2A, Macin, Tulcea 825300
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +4 754 319 975
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@cabelustudio.ro
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;