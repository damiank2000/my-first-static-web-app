import React from 'react';
import styled from "styled-components";

const NavigationContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 1em;
`;

const NavigationItem = styled.a`
    flex-basis: 50%;
    height: 50vw;
    width: 50vw;
    min-height: 100px;
    min-width: 100px;
    text-align: center;
    padding: 1em 1em;
    margin: 0;

    :active {
        transform: scale(90%);
        transform-origin: center, center;
    }
`;

const NavigationImage = styled.img`
    width: 100%;
    height: 100%;
    border: 2px solid black;
    border-radius: 4px;
    box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.5)
`;

const Home = () => {

    return (
        <div>
            <NavigationContainer>
                <NavigationItem href="foodlist">
                    <NavigationImage src="/images/food.png" alt="food" />
                </NavigationItem>
                <NavigationItem href="drinklist">
                    <NavigationImage src="/images/drink.png" alt="drink" />
                </NavigationItem>
                <NavigationItem href="sleeplist">
                    <NavigationImage src="/images/sleep.png" alt="sleep" />
                </NavigationItem>
                <NavigationItem href="exerciselist">
                    <NavigationImage src="/images/exercise.png" alt="exercise" />
                </NavigationItem>
                <NavigationItem href="headachelist">
                    <NavigationImage src="/images/headache.png" alt="headache" />
                </NavigationItem>
                <NavigationItem href="painkillerlist">
                    <NavigationImage src="/images/painkiller.png" alt="painkiller" />
                </NavigationItem>
            </NavigationContainer>
        </div>
    );
}

export default Home;
