import { useState } from "react";
import "./lotteryGame.css";
import {genTicket,sum} from "./lotteryGmae.js"
import Ticket from "./Ticket.jsx";

export default function LotteryGame({n=3,winningSum=15}){
    let [ticket,setTicket]=useState(genTicket(n));

    let generate=()=>{
        setTicket(genTicket(n));
    }

    let isWinning=sum(ticket)===winningSum;
    return(
        <div>
            <p>Lottery Game!</p>
            <Ticket ticket={ticket}/>
            <br />
            <button onClick={generate}>Buy Ticket</button>
            <p>{isWinning && "Congrulations,You Won!!"}</p>
        </div>
        

    )
}