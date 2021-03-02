import { start } from "repl";

export interface pathData {
    name: string;
    description: string;
    descripOne: string;
    descripTwo: string;
    descripThree: string;
    descripFour: string;
    descripFive: string;
    descripSix: string;
    descripSeven: string;
    displayPoint: string;
    image: string;
    display: string;
}

export const PathDataDisplay = (props: pathData) => {
    return(
        <div style={{margin:"1vw 0", display:"flex", alignItems:"center", flexFlow:"column"}}>
            <div style={{width:"80vw"}}>
                <h1 style={{fontSize:"5vw", textAlign:"start", margin:"0"}}>{props.name}</h1>
                <p style={{fontSize:"2vw", textAlign:"start"}} >{props.description} </p>
            </div>
            <div style={{fontSize:"2vw", width:"80vw", textAlign:"start"}}>
                <ol style={{padding:"0"}}>
                    <li>{props.descripOne}</li>
                    <li>{props.descripTwo}</li>
                    <li>{props.descripThree}</li>
                    <li>{props.descripFour}</li>
                    <li>{props.descripFive}</li>
                    <li style={{display:props.displayPoint}}>{props.descripSix}</li>
                    <li style={{display:props.displayPoint}}>{props.descripSeven}</li>
                </ol>
            </div>  
            <img src={props.image} style={{width:"50vw", height:"50vw", display:props.display}}></img>
        </div>
    );
}