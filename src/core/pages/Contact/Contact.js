import React from "react";
import styled from 'styled-components';
import { imageVariantsInit, imageVariants, containerVariants } from '../../../motionVariants/stagerChildren'; 
import { motion } from "framer-motion";

const Container = styled(motion.div)`
    max-width: 2500px;
    margin: 60px auto 0 auto;
    color: #ffffff;
`
const SectionContact = styled(motion.section)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-template-rows: min-content;
    grid-auto-rows: min-content;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
    min-height: calc(100vh - 60px);

    .mapouter{
        position: relative;
        max-width: 400px;
        width: 100%;
        height: 400px;
    }
`
const List = styled(motion.ul)`
    list-style: none;
    font-family: 'Roboto', sans-serif;
    color: #444444;
`
const ListItem = styled(motion.li)`
    padding: 5px;
`
const Item = styled(motion.p)`
    text-decoration: none;
    font-size: 17px;

    inline-size: 100%; 
    overflow: hidden;
`
const Map = styled(motion.iframe)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`
const Contact = () => {
    return(
        <Container initial="exit" animate="enter" enter="enter" exit="exit">
            <SectionContact variants={containerVariants}>
                <List variants={imageVariantsInit}>
                    <ListItem variants={imageVariants}>
                        <Item>
                        Nazwa firmy
                        </Item>
                    </ListItem>
                    <ListItem variants={imageVariants}>
                        <Item>
                        Email: przykladowy@sklep.eu
                        </Item>
                    </ListItem>
                    <ListItem variants={imageVariants}>
                        <Item>
                        Tel: +48 555 555 555
                        </Item>
                    </ListItem>
                    <ListItem variants={imageVariants}>
                        <Item>
                        Adres: 12-345 Warszawa ul. Nowy Świat 69 / 13
                        </Item>
                    </ListItem>
                </List>
                <motion.div
                    variants={containerVariants}
                    className="mapouter"
                >
                    <Map 
                        id="gmap_canvas"
                        scrolling="no"
                        frameBorder="no"
                        src="https://maps.google.com/maps?q=warszawa%20nowy%20swiat&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    />
                </motion.div>
            </SectionContact>
        </Container>
    );
}
export default Contact;