import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../../context';
import { motion } from 'framer-motion';

const Navigation = styled.nav`
    padding: 5px 15px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 18px 0px, rgba(0, 0, 0, 0.15) 0px 7px 10px -5px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
    z-index: 11;
    @media (max-width: 768px) {
        display: none;;
    }
`
const List = styled.ul`
    display: inline-flex;
    column-gap: 20px;
    list-style: none;
    font-family: 'Roboto', sans-serif;
`
const ListItem = styled(motion.li)`
    padding: 3px;
`
const Item = styled(Link)`
    color: #666666;
    text-decoration: none;
`
const Cart = styled(motion.div)`
    position: relative;
    cursor: pointer;
    span{
        color: #666666;
        font-size: 35px;
    }
    small{
        font-family: 'Roboto', sans-serif;
        border-radius: 50%;
        position: absolute;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 18px 0px, rgba(0, 0, 0, 0.15) 0px 7px 10px -5px;
        background: linear-gradient(250deg, orangered, red);
        width: 20px;
        height: 20px;
        padding: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        top: 70%;
    }
`
const list = [
    { name: "Home", link: "/" },
    { name: "Sklep", link: "/shop" },
    { name: "Blog", link: "/blog" },
    { name: "Kontakt", link: "/kontakt" }
];

const Navbar = () => {
    const { state } = React.useContext(Context);
    const navigate = useNavigate();
    return(
        <Navigation>
            <List>
                {list.map((item,index) => (
                    <ListItem
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Item to={item.link}>
                            {item.name}
                        </Item>
                    </ListItem>
                ))}
            </List>
            <Cart
                onClick={() => navigate("/cart-list")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >
                <span className="material-icons">shopping_bag</span>
                <small>{state.shop.cart.reduce((acc,item) => acc + item.qty, 0) || 0}</small>
            </Cart>
        </Navigation>
    );
}
export default Navbar;