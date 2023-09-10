import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Context } from '../../../context';
import db from '../../../reducers/products.json';
import { imageVariantsInit, imageVariants, containerVariants } from '../../../motionVariants/stagerChildren'; 

const Container = styled(motion.div)`
    max-width: 2500px;
    margin: 60px auto 0 auto;
    background: #ffffff;
`
const SectionShopinCart = styled(motion.section)`
    padding: 10px;
    overflow: hidden;
`
const ListWrapper = styled(motion.div)`
    max-width: 1250px;
    max-height: 600px;
    margin: 0 auto;
    overflow: auto;
    
`
const List = styled(motion.ul)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 15px;
    border-bottom: 1px solid #666666;
    padding: 10px;
    min-width: 600px;
    max-width: 1250px;
    width: 100%;
    list-style: none;
`
const ListItem = styled(motion.li)`
    height: 100%;
    width: calc(1230px / 6);
    display: flex;
    justify-content: center;
    @media (max-width: 768px){
        width: 100px;
    }
`
const ProductAsset = styled(motion.img)`
    height: 70px;
    width: 100px;
`
const ProductName = styled(motion.h1)`
    color: #444444;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`
const ProductQty = styled(motion.div)`

`
const ProductPrice = styled(motion.div)``
const ProductPriceToTotalItems = styled(motion.div)``
const ClearCart = styled(motion.div)``
const Button = styled(motion.button)`
    ${({checkout}) => checkout && css`
        outline: none;
        border: none;
        border-radius: 6px;
        justify-self: center;
        outline: none;
        border: 1.5px solid rgb(255, 255, 255);
        color: rgb(255, 255, 255);
        text-decoration: none;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 18px 0px, rgba(0, 0, 0, 0.15) 0px 7px 10px -5px;
        background: linear-gradient(250deg, orangered, red);
        padding: 8px 30px !important;
    `}
    ${({secondary}) => secondary && css`
        border-radius: 50%;
        outline: none;
        border: 1.5px solid rgb(255, 255, 255);
        color: rgb(255, 255, 255);
        text-decoration: none;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 18px 0px, rgba(0, 0, 0, 0.15) 0px 7px 10px -5px;
        background: linear-gradient(250deg, orangered, red);
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ${({primary}) => primary && css`
        border-radius: 50%;
        background: linear-gradient(250deg, rgb(153, 17, 255), rgb(119, 0, 255));
        outline: none;
        border: 1.5px solid rgb(255, 255, 255);
        color: rgb(255, 255, 255);
        text-decoration: none;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 18px 0px, rgba(0, 0, 0, 0.15) 0px 7px 10px -5px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`
const Typography = styled(motion.h1)`
    color: #444444;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`
const ButtonsWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    column-gap: 20px;
`
const SectionCheckout = styled(motion.section)`
    max-width: 1250px;
    margin: 0 auto;
    background: #ffffff;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: min-content;
    grid-auto-rows: min-content;
    justify-items: end;
`
const CheckoutList = styled(motion.ul)`
    list-style: none;
`
const CheckoutListItem = styled(motion.li)`
    padding: 10px;
    color: #444444;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`

const ProductCard = (props) => {
    const currentProduct = (id) => db.find((item) => item.id === id);

    return(
        <List variants={imageVariants}>
            <ListItem>
                <ProductAsset 
                    alt={props.item.name}
                    src={`/img${props.item.assets[0]}`}
                />
            </ListItem>
            <ListItem>
                <ProductName>
                    {props.item.name}
                </ProductName>
            </ListItem>
            <ListItem>
            <ProductQty>
                <ButtonsWrapper>
                    <Button
                        primary="true"
                        onClick={() => props.dispatch({
                            type: "ADD_ITEM_TO_CART",
                            payload: props.item
                        })}
                        style={{
                            opacity: props.item.qty === currentProduct(props.item.id).qty ? 0.3 : 1
                        }}
                        disabled={props.item.qty === currentProduct(props.item.id).qty ? true : false}
                    >
                        <span className="material-icons">add</span>
                    </Button>
                    <Typography>
                        {props.item.qty}
                    </Typography>
                    <Button
                        primary="true"
                        onClick={() => props.dispatch({
                            type: "REMOVE_ITEM_FROM_CART",
                            payload: props.item
                        })}
                    >
                        <span className="material-icons">remove</span>
                    </Button>
                </ButtonsWrapper>
            </ProductQty>
            </ListItem>
            <ListItem>
            <ProductPrice>
                <Typography>
                    {props.item.price} PLN
                </Typography>
            </ProductPrice>
            </ListItem>
            <ListItem>
            <ProductPriceToTotalItems>
                <Typography>
                    {props.item.price * props.item.qty} PLN
                </Typography>
            </ProductPriceToTotalItems>
            </ListItem>
            <ListItem>
            <ClearCart>
                <Button
                    secondary="true"
                    onClick={() => props.dispatch({ type: "REMOVE_ALL_ITEMS_FROM_CART", payload: props.item })}
                >
                    <span className="material-icons">delete</span>
                </Button>
            </ClearCart>
            </ListItem>
        </List>
    );
}
const ShopingCart = () => {
    const { state, dispatch } = React.useContext(Context);
    const sortItems = (array) => {
        return array.sort((a,b) => {
            if(a.id > b.id){
                return 1;
            }
            else if(b.id > a.id){
                return -1;
            }
            else{
                return 0;
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = 'Po akcetptacji tej operacji zostanie wyczyszczona zawartość koszyka.';
        if(window.confirm(message)){
            dispatch({ type: "CLEAR_CART" });
        }
    }
    return(
        <Container initial="exit" animate="enter" enter="enter" exit="exit">
            <SectionShopinCart>
                <ListWrapper variants={imageVariantsInit}>
                {state.shop.cart.length ? sortItems(state.shop.cart).map((item,index) => (
                    <ProductCard
                        key={index}
                        item={item}
                        state={state}
                        dispatch={dispatch}
                    />
                )) : (
                    <div>
                        <h1>
                            Nie masz jeszcze żadnych produktów w koszyku...
                        </h1>
                        <Link to="/shop">
                            Wróć do sklepu.
                        </Link>
                    </div>
                )}
                </ListWrapper>
            </SectionShopinCart>
            {state.shop.cart.length ? (<SectionCheckout variants={containerVariants}>
                <div />
                <CheckoutList
                    checkout="true"
                    variants={imageVariantsInit}
                >
                    <CheckoutListItem
                        checkout="true"
                        variants={imageVariants}
                    >
                        Wszystko razem: {state.shop.cart.reduce((acc, item) => acc + item.price * item.qty, 0)} PLN
                    </CheckoutListItem>
                    <CheckoutListItem
                        checkout="true"
                    >
                        Dostawa kurierem: 15 PLN
                    </CheckoutListItem>
                    <CheckoutListItem
                        checkout="true"
                        variants={imageVariants}
                    >
                        Podsumowanie: {state.shop.cart.reduce((acc, item) => acc + item.price * item.qty, 0) + 15} PLN
                    </CheckoutListItem>
                    <CheckoutListItem
                        checkout="true"
                        variants={imageVariants}
                    >
                        <Button
                            checkout="true"
                            variants={imageVariants}
                            onClick={handleSubmit}
                        >
                            Zamawiam
                        </Button>
                    </CheckoutListItem>
                </CheckoutList>
            </SectionCheckout>) : null}
        </Container>
    );
}
export default ShopingCart;