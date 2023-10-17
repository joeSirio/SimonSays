"use client"

import ShapeType from "@/enums/shapeType";
import ITarget from "@/interfaces/ITarget";
import { useEffect, useState } from "react";
import Target from "./target";

// player feedback on item light up
// player feedback on correct hit
// score counter
// 


export default function Game() {
    const [targets, setTargets] = useState<ITarget[]>([]);
    const [gameHistory, setGameHistory] = useState<ITarget[]>([]);
    const [startAnim, setStartAnim] = useState(false);
    const [gameStart, setGameStart] = useState(false);

    const blue = "rgb(74,149,185)";
    const red = "rgb(228,75,90)";
    const green = "rgb(78,159,100)";
    const yellow = "rgb(233,201,98)"; 

    useEffect(() => {
        let newTargets: ITarget[] = [];
        let targetAmount = 3;
        let images = [['/yellow_outline.svg', '/yellow_filled.svg'],
            ['/red_outline.svg', '/red-filled.svg'], 
            ['/green_outline.svg', '/green_filled.svg'], 
            ['/blue_outline.svg', '/blue_filled.svg']];

        for(let i = 0; i <= targetAmount; i++){
            let target: ITarget = {
                targetId: i,
                images: images[i],
                active:false
            }
            newTargets.push(target);
        }

        setTargets(newTargets);
    }, []);

    const handleStartGame = () => {
        setStartAnim(true);
        setTimeout(() => {
            setGameStart(true);
            addNewTarget();
        }, 2000)
    }

    const addNewTarget = () => {
        let rndInt = Math.floor(Math.random() * 4)
        let updatedGameHistory = gameHistory;
        updatedGameHistory.push(targets[rndInt])
        setGameHistory(updatedGameHistory);
    }

    const runSimonSaying = () => {
        for(var i = 0; i < gameHistory.length; i++){
            
        }
    }


    return (
        <div className="game-wrapper">
            <div className={`target-wrappers ${startAnim && 'game-active'}`}>
                {targets.map(target => (
                        <Target key={target.targetId} targetData={target} />
                ))}
            </div>
            <div className={`game-title ${startAnim && 'game-active'}`}>
                <span style={{color: red}}>S</span>
                <span style={{color: green}}>I</span>
                <span style={{color: blue}}>M</span>
                <span style={{color: green}}>O</span>
                <span style={{color: yellow}}>N</span>
                
                <br/>

                <span style={{color: blue}}>S</span>
                <span style={{color: red}}>A</span>
                <span style={{color: yellow}}>Y</span>
                <span style={{color: green}}>S</span>
            </div>
            <div className={`game-start ${startAnim && 'game-active'}`} onClick={handleStartGame}>
                PLAY
            </div>
        </div>
    )
}