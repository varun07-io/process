import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'
import './Hero.css'

const Section  = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
`;

const Container  = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem calc((100vw - 1300px) / 2);

    @media screen and (max-width: 768px) {
        grid-grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 2rem;

    h1 {
        margin-bottom: 0.5rem;
        font-size: 2rem;
        font-family: 'Oswald', sans-serif;
    }
    p {
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
        font-family: 'Arapey', serif;
    }
`;

const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #fff;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: #fff;
`;



const Hero = () => {
    const fadeLeft = {
        hidden: {opacity: 0 , x: -100},
        visible: {opacity: 1, x: 0}
    }
    return (
        <Section className="sec">
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        BRK SYSTEMS
                    </motion.h1>
                    <motion.p
                    variants={fadeLeft}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 1 }}
                    >Process need to be followed,</motion.p>
                    <Button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, backgroundColor: '#67F6E7', borderColor: 'none', color: '#000'}}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1, transition: { duration: 1 }}}
                    >get started</Button>
                </ColumnLeft>
            </Container>
        </Section>
    );
};

export default Hero;