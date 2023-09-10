import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { imageVariants, containerVariants, imageVariantsInit } from '../../../motionVariants/stagerChildren'; 
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
    max-width: 2500px;
    margin: 60px auto 0 auto;
    color: #ffffff;
`
const HeroSection = styled(motion.section)`
    width: 100%;
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(135deg, rgba(187, 17, 255, 0.4), rgba(170, 0, 255, 0.4)), url('./img/home.jpg');
    @media (max-width: 768px){
        height: 65vh;
    }
    @media (min-width: 769px){
        height: 100vh;
    }
`
const Typography = styled(motion.h1)`
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
const HeadText = styled(motion.div)`
    max-width: 1250px;
    margin: 0 auto;
    width: 90%;
    background: linear-gradient(135deg, rgb(153, 17, 255), rgb(119, 0, 255));
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 18px 0px, rgba(0, 0, 0, 0.15) 0px 7px 10px -5px;
    font-size: 16px;
    color: rgb(255, 255, 255);
    text-align: justify;
    @media (max-width: 768px) {
        padding: 20px 50px;
    }
    @media (min-width: 769px) {
        padding: 50px 100px;
    }
`
const SectionHeadText = styled(motion.section)`
    display: flex;
    justify-content: center;
    position: relative;
    top: -50px;
`
const SectionAbout = styled(motion.section)`
    max-width: 1250px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 30px;
`
const Card = styled(motion.div)`
    font-family: 'Roboto', sans-serif;
    ${({secondary}) => secondary && css`
        max-width: 300px;
        min-width: 264px;
        width: 100%;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 18px 0px, rgba(0, 0, 0, 0.15) 0px 7px 10px -5px;
        background: rgb(255, 255, 255);
        border: 3px solid rgb(119, 0, 255);
        height: 300px;
        place-self: center;
        position: relative;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 100px 1fr 100px;
        justify-items: center;
        align-items: center;
    `}
    ${({primary}) => primary && css`
        max-width: 300px;
        min-width: 264px;
        width: 100%;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 18px 0px, rgba(0, 0, 0, 0.15) 0px 7px 10px -5px;
        place-self: center;
        position: relative;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 100px 1fr 100px;
        background: linear-gradient(250deg, rgb(153, 17, 255), rgb(119, 0, 255));
        border: 3px solid rgb(255, 255, 255);
        height: 380px;
        color: rgb(255, 255, 255);
        justify-items: center;
        align-items: center;
    `}

    ${({blog}) => blog && css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-template-rows: min-content;
        grid-auto-rows: min-content;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 18px 0px, rgba(0, 0, 0, 0.15) 0px 7px 10px -5px;
    `}
`
const Button = styled(Link)`
    ${({primary}) => primary && css`
        border-radius: 30px;
        position: absolute;
        bottom: 35px;
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
    `}
`
const SectionBlog = styled(motion.section)`
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    background-color: rgb(255, 255, 255);
    text-align: center;
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

const CardBlog = (props) => (
    <Card blog="true">
        <CardImage />
        <List>
            <ListItem>
                <Typography color="#444444">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type a
                </Typography>
            </ListItem>
            <ListItem>
                <Button to="/blog" secondary="true" style={{ top: '50%', transform: 'translate(-50%,-50%)', height: 35, left: '50%' }}>
                    Odwiedz
                </Button>
            </ListItem>
        </List>
    </Card>
);

const CardAboutUs = (props) => (
    <Card {...props} variants={imageVariants}>
        <div
            style={{
                color: props.color,
                fontSize: 20,
                fontWeight: 600
            }}
        >
            {props.title}
        </div>
        <span
            className="material-icons"
            style={{
                color: props.color,
                fontSize: props.fontSize
            }}
        >
            {props.icon}
        </span>
        <Button to={props.link} {...props}>
            Odwiedz
        </Button>
    </Card>
);
const Home = () => {
    return(
        <Container initial="exit" animate="enter" enter="enter" exit="exit">
            <HeroSection variants={containerVariants}>
                <Typography>
                    Przykładowy sklep
                </Typography>
            </HeroSection>
            <SectionHeadText>
                <HeadText>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Typography>
                </HeadText>
            </SectionHeadText>
            <div
                style={{
                    position: 'relative',
                    top: -50
                }}
            >
                <div
                    style={{
                        padding: 60
                    }}
                >
                    <Typography
                        textAlign="center"
                        color="#444444"
                        variants={imageVariants}
                    >
                        What is Lorem Ipsum?
                    </Typography>
                </div>
                <SectionAbout variants={imageVariantsInit}>
                    <CardAboutUs 
                        secondary="true" 
                        icon={"language"}
                        title={"Blog"}
                        link={"/blog"}
                        color={"#444444"}
                        fontSize={60}
                    />
                    <CardAboutUs 
                        primary="true"
                        icon={"visibility"}
                        title={"Sklep"}
                        link={"/shop"}
                        color={"#ffffff"}
                        fontSize={70}
                    />
                    <CardAboutUs 
                        secondary="true" 
                        icon={"call"}
                        title={"Kontakt"}
                        link={"/kontakt"}
                        color={"#444444"}
                        fontSize={60}
                    />
                </SectionAbout>
                <div
                    style={{
                        padding: 60
                    }}
                >
                    <Typography
                        variants={imageVariants}
                        textAlign="center"
                        color="#444444"
                    >
                        What is Lorem Ipsum?
                    </Typography>
                </div>
                <SectionBlog variants={containerVariants}>
                    <CardBlog />
                </SectionBlog>
                
            </div>
        </Container>
    );
}
export default Home;