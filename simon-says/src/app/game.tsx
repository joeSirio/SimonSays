"use client"

import ShapeType from "@/enums/shapeType";
import ITarget from "@/interfaces/ITarget";
import { useEffect, useState } from "react";
import Target from "./target";

export default function Game() {
    const [targets, setTargets] = useState<ITarget[]>([]);
    const [gameHistory, setGameHistory] = useState([]);
    const [gameStart, setGameStart] = useState(false);

    useEffect(() => {
        let newTargets: ITarget[] = [];
        let targetAmount = 5;
        for(let i = 1; i <= targetAmount; i++){
            let target: ITarget = {
                targetId: i,
                shape: getRandomEnumValue(ShapeType),
                color: "#125213"
            }
            newTargets.push(target);
        }

        setTargets(newTargets);
    }, []);

    const getRandomEnumValue = (enumeration: any) => {
        const values = Object.keys(enumeration)
            .map((key) => enumeration[key])
            .filter((value) => typeof enumeration[value] !== 'number');
            
        const randValue = values[Math.floor(Math.random() * values.length)];

        return enumeration[randValue];
    };

    return (
        <div className="game-wrapper">
            {targets.map(target => (
                    <Target key={target.targetId} targetData={target} />
            ))}
        </div>
    )
}