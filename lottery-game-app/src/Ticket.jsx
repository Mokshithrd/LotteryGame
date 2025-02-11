import TicketNum from "./TicketNum";
import "./lotteryGame.css"

export default function Ticket({ticket}){
    return(
    <div className="Ticket">
    {ticket.map((num,idx)=>(
    <TicketNum num={num} key={idx}/>
    ))}
    </div>
    )
};