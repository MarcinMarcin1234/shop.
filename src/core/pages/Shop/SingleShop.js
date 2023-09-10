import React from "react";
import styled, { css } from "styled-components";
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import db from '../../../reducers/products.json';
import { imageVariantsInit, imageVariants, containerVariants } from '../../../motionVariants/stagerChildren';
import { Context } from '../../../context';

const Container = styled(motion.div)`
    max-width: 2500px;
    margin: 60px auto 0 auto;
    color: #ffffff;
    overflow-x: hidden;
`
const SectionGalleryProduct = styled(motion.div)`
    display: flex;
    justify-content: center;
    width: 100%;
`
const ProductImageWrapper = styled(motion.div)`
    max-width: 1250px;
    width: 100%;
    margin: 0 auto;
    height: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ProductImage = styled(motion.img)`
    max-width: 600px;
    width: calc(100% - 100px);
    max-height: 450px;
    /* height: calc(100% - 130px); */
    position: absolute;
    object-fit: 70%;
`
const ProductImagesGallery = styled(motion.div)`
    display: inline-flex;
    column-gap: 25px;
    padding: 10px;
`
const ProductGalleryImage = styled(motion.img)`
    height: 9vw;
    object-fit: 10%;
`
const Button = styled(motion.button)`
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

    ${({next}) => next && css`
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        background: linear-gradient(250deg, rgb(153, 17, 255), rgb(119, 0, 255));
        box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 18px 0px, rgba(0, 0, 0, 0.15) 0px 7px 10px -5px;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        @media (max-width: 768px){
            display: none;
        }
    `}
    ${({prev}) => prev && css`
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        background: linear-gradient(250deg, rgb(153, 17, 255), rgb(119, 0, 255));
        box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 18px 0px, rgba(0, 0, 0, 0.15) 0px 7px 10px -5px;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        @media (max-width: 768px){
            display: none;
        }
    `}
`
const SectionContent = styled(motion.section)`
    max-width: 1250px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-template-rows: min-content;
    grid-auto-rows: min-content;
    padding: 10px;
    margin-bottom: 50px;
    grid-row-gap: 50px;
`
const SectionDescription = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
    grid-row-gap: 50px;
`
const Logo = styled(motion.img)`
    margin: 0 auto;
    height: 75px;
    @media (max-width: 768px) {
        height: 45px;
    }
`
const Title = styled(motion.h1)`
    color: #444444;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    text-align: center;
`
const Description = styled(motion.p)`
    color: #666666;
    font-family: 'Lato', sans-serif;
    text-align: justify;

`
const SectionPrice = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, min-content);
    grid-row-gap: 20px;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
`
const List = styled(motion.ul)`
    list-style: none;
    font-family: 'Roboto', sans-serif;
`
const ListItem = styled(motion.li)`
    padding: 5px;
`
const Item = styled(motion.div)`
    text-decoration: none;
    font-size: 17px;
    color: #444444;
    font-size: 18px;
`

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
}
const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
}

const SingleShop = () => {
    const { state, dispatch } = React.useContext(Context);
    const params = useParams();
    const [page,setPage] = React.useState(0);
    const [direction,setDirection] = React.useState(0);
    const [product,setProduct] = React.useState(null);

    const paginate = (newPage) => {
        if(newPage > product.assets.length -1){
            setPage(0);
            setDirection(0)
        }
        else if(newPage < 0){
            setPage(product.assets.length -1);
            setDirection(product.assets.length -1)
        }
        else{
            setPage(newPage);
            setDirection(newPage);
        }   
    }

    const readyStateCurrentProductCart = () => {
        const currentProduct = state.shop.cart.find((item) => item.id === Number(params.id));
        if(currentProduct)return currentProduct;
        else return false;
    }
    
    React.useEffect(() => {
        if(params.id){
            const assets = db.find((item) => item.id === Number(params.id));
            setProduct(assets);
        }
    }, []);
    console.log(state, ' state')
    if(!product) return <h1>Please wait moment ...</h1>;

    return(
        <Container initial="exit" animate="enter" enter="enter" exit="exit">
            <ProductImageWrapper variants={containerVariants}>
            <AnimatePresence initial={false} custom={direction}>
                <ProductImage
                    key={page}
                    src={`/img${product.assets[page]}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
        
                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(page + 1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(page - 1);
                        }
                    }}
                />
            </AnimatePresence>
            
                <Button prev="true"
                    onClick={() => paginate(page -1)}
                >
                    <span className="material-icons">arrow_left</span>
                </Button>
                <Button next="true"
                    onClick={() => paginate(page +1)}
                >
                    <span className="material-icons">arrow_right</span>
                </Button>
            </ProductImageWrapper>

            <SectionGalleryProduct>
                <ProductImagesGallery variants={imageVariantsInit}>
                    {product.assets.map((item,index) => (
                        <ProductGalleryImage 
                            key={index}
                            src={`/img${item}`}
                            alt={item}
                            onClick={() => paginate(index)}
                            whileTap={{ scale: 0.8 }}
                            animate={{ scale: page === index ? 0.8 : 1 }}
                            variants={imageVariants}
                        />
                    ))}
                </ProductImagesGallery>
            </SectionGalleryProduct>
            <SectionContent>
                <SectionDescription variants={imageVariantsInit}>
                    <Logo
                        variants={imageVariants} 
                        alt={product.logo}
                        src={`/img${product.logo}`}
                    />
                    <Title variants={imageVariants} >
                        {product.name}
                    </Title>
                    <Description variants={imageVariants} >
                        {product.description}
                    </Description>
                </SectionDescription>
                <SectionPrice>
                    <List>
                        <ListItem>
                            <Item>
                                Cena brutto:
                            </Item>
                        </ListItem>
                        <ListItem>
                            <Item>
                                {product.price} PLN
                            </Item>
                        </ListItem>
                        <ListItem>
                            <Item>
                            {!readyStateCurrentProductCart() ? 0 : readyStateCurrentProductCart().qty} / {product.qty} __ Sztuk
                            </Item>
                        </ListItem>
                        <ListItem>
                            <Button
                                style={{ 
                                    display: readyStateCurrentProductCart().qty === product.qty ? 'none' : 'flex'
                                }}
                                onClick={() => dispatch({
                                    type: "ADD_ITEM_TO_CART",
                                    payload: product
                                })}
                            >
                                Kup teraz
                            </Button>
                        </ListItem>
                    </List>
                </SectionPrice>
            </SectionContent>
        </Container>
    );
}
export default SingleShop;