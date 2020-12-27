import { Button, Input } from '@material-ui/core';
import React, { useState } from 'react';

interface Hero {
    name: string;
    age: number;
    height: number;
    power: string;
};

const HeroBuilder = () => {
    const [hero, setHero] = useState<Hero>({ name: '', age: 0, height: 0, power: ''});
    const [display, setDisplay] = useState(false);


    const heroChanged = (type: 'name' | 'age' | 'height' | 'power', val: any) => {
        setDisplay(false);
        let tempHero = hero as any;
        tempHero[type] = val;
        setHero(hero);
    }

    return (
        <div>
            <h1>Build a Hero</h1>
            <div>
                <label>Name: </label>
                <Input type="text" style={{ margin: 10 }} onChange={(event) => {heroChanged('name', event.target.value)}} />

                <label>Age: </label>
                <Input type="number" style={{ margin: 10 }} onChange={(event) => {heroChanged('age', event.target.value)}} />
                <br/>
                <label>Height: </label>
                <Input type="number" style={{ margin: 10 }} onChange={(event) => {heroChanged('height', event.target.value)}} />

                <label>Super Power: </label>
                <Input type="text" style={{ margin: 10 }} onChange={(event) => {heroChanged('power', event.target.value)}} />
            </div>
            <Button variant="contained" color="primary" onClick={() => setDisplay(!display)} style={{ margin: 10}}>Display Hero</Button>

            {display && (
                <div>
                    <h1>Hero Info:</h1>
                    <ul>
                        <li>Name: {hero.name === '' ? 'Unknown' : hero.name}</li>
                        <li>Age: {hero.age === 0 ? 'Unknown' : hero.age}</li>
                        <li>Height: {hero.height === 0 ? 'Unknown' : hero.height}</li>
                        <li>Super Power: {hero.power === '' ? 'Unknown' : hero.power}</li>
                    </ul>
                </div>
            )}
        </div>
    )
} 

export default HeroBuilder;