import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    max-width: 2500px;
    margin: 0 auto;
    color: #ffffff;
`
const Foot = styled.footer`
    min-height: 300px;
    width: 100%;
    border-top: 1px solid #444444;
    display: flex;
    align-items: center;
    @media (max-width: 768px){
        justify-content: center;
    }
`
const List = styled.ul`
    list-style: none;
    font-family: 'Roboto', sans-serif;
    @media (min-width: 769px){
        display: inline-flex;
        color: #444444;
        gap: 15px;
        padding-left: 100px;
    }
    @media (max-width: 768px){
        padding-left: 0;

    }
`
const ListItem = styled.li`
    padding: 5px;
`
const Item = styled(Link)`
    text-decoration: none;
    font-size: 17px;
`

const list = [
    { name: "Home", link: "/" },
    { name: "Sklep", link: "/shop" },
    { name: "Blog", link: "/blog" },
    { name: "Kontakt", link: "/kontakt" }
];
const Footer = () => {
    return(
        <Container>
            <Foot>
                <List>
                    {list.map((item, index) => (
                        <ListItem
                            key={index}
                        >
                            <Item to={item.link}>
                                {item.name}
                            </Item>
                        </ListItem>
                    ))}
                </List>
            </Foot>
        </Container>
    );
}
export default Footer;