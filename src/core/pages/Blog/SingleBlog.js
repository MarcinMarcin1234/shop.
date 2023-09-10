import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { imageVariants, containerVariants } from '../../../motionVariants/stagerChildren'; 
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
    max-width: 1250px;
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
    background-image: linear-gradient(135deg, rgba(187, 17, 255, 0.4), rgba(170, 0, 255, 0.4)), url('./img/image1.png');
`
const SectionBlog = styled(motion.section)`

`
const Title = styled(motion.h1)`
    text-align: center;
    padding: 50px 0px;
    letter-spacing: 1.5px;
    color: #444444;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 768px) {
        font-size: 22px;
    }
    @media (min-width: 769px) {
        font-size: 26px;
    }
`
const Content = styled(motion.p)`
    font-family: 'Lato', sans-serif;
    color: #666666;
    line-height: 1.7;
    text-align: justify;
    @media (max-width: 768px) {
        font-size: 20px;
        padding: 5px;
    }
    @media (min-width: 769px) {
        font-size: 16px;
        padding: 0px 50px 50px 50px;
    }
`
const GoBack = styled(Link)`
    color: #444444;
    font-family: 'Roboto', sans-serif;
    float: right;
    padding: 10px;
    font-size: 20px;
    text-decoration: none;
`

const SingleBlog = () => {
    return(
        <Container initial="exit" animate="enter" enter="enter" exit="exit">
            <HeroWrapper variants={containerVariants}>
                <HeroSection />
            </HeroWrapper>
            <SectionBlog variants={containerVariants}>
                <Title variants={imageVariants}>
                    Lorem ipsoum
                </Title>
                <Content variants={imageVariants}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Content>
                <GoBack to={-1}>
                    Wróć...
                </GoBack>
            </SectionBlog>
        </Container>
    );
}
export default SingleBlog;