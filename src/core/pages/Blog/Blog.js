import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { imageVariantsInit, imageVariants, containerVariants } from '../../../motionVariants/stagerChildren'; 
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
    max-width: 2500px;
    margin: 60px auto 0 auto;
    color: #ffffff;
`
const HeroWrapper = styled(motion.div)`
    max-width: 1250px;
    margin: 0 auto;
    padding: 0px 5px;
`
const HeroSection = styled(motion.section)`
    width: 100%;
    height: 50vh;
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(135deg, rgba(187, 17, 255, 0.4), rgba(170, 0, 255, 0.4)), url('./img/hero.jpg');
`
const Typography = styled.h1`
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.color ? props.color : '#ffffff'};
    text-align: ${(props) => props.textAlign};
    @media (max-width: 768px){
        font-size: 20px;
        letter-spacing: 1.5px;
        line-height: 1.8;
    }
    @media (min-width: 769px){
        font-size: 25px;
        letter-spacing: 2px;
    }
`
const SectionBlog = styled(motion.section)`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, min-content);
    grid-auto-rows: min-content;
    grid-row-gap: 50px;
    padding: 50px 10px;
`
const CardImage = styled(motion.div)`
    background-image: linear-gradient(135deg, rgba(187, 17, 255, 0.4), rgba(170, 0, 255, 0.4)), url("./img/image1.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 350px;
    border-radius: 6px;
`
const List = styled(motion.ul)`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 100px;
    padding: 10px;
    min-height: 350px;
    height: 100%;
`
const ListItem = styled(motion.li)`
    position: relative;
    padding: 20px;
    display: flex;
    background-color: #ffffff;
    & > h1{
        font-size: 22px !important;
        text-align: justify !important;
        @media (max-width: 768px) {
            line-height: 1.5;
        }
    }
`
const Card = styled(motion.div)`
    font-family: 'Roboto', sans-serif;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-template-rows: min-content;
    grid-auto-rows: min-content;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 18px 0px, rgba(0, 0, 0, 0.15) 0px 7px 10px -5px;
`
const Button = styled(Link)`
    border-radius: 30px;
    position: absolute;
    bottom: 35px;
    justify-self: center;
    background: linear-gradient(250deg, rgb(153, 17, 255), rgb(119, 0, 255));
    outline: none;
    border: 1.5px solid rgb(255, 255, 255);
    color: rgb(255, 255, 255);
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 18px 0px, rgba(0, 0, 0, 0.15) 0px 7px 10px -5px;
    padding: 8px 30px !important;
`

const CardBlog = (props) => (
    <Card variants={imageVariantsInit} >
        <CardImage variants={imageVariants} />
        <List variants={imageVariants}>
            <ListItem>
                <Typography color="#444444">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type a
                </Typography>
            </ListItem>
            <ListItem>
                <Button to="/single-blog" style={{ top: '50%', transform: 'translate(-50%,-50%)', height: 35, left: '50%' }}>
                    Odwiedź
                </Button>
            </ListItem>
        </List>
    </Card>
);

const Blog = () => {
    return(
        <Container initial="exit" animate="enter" enter="enter" exit="exit">
            <HeroWrapper variants={containerVariants}>
                <HeroSection>
                    <Typography variants={imageVariants} >
                        Blog
                    </Typography>
                </HeroSection>
            </HeroWrapper>
            <SectionBlog variants={containerVariants}>
                {new Array(8).fill().map((_,index) => (
                    <CardBlog key={index} />
                ))}
            </SectionBlog>
        </Container>
    );
}
export default Blog;