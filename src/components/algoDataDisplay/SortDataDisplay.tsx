import { parentPort } from 'worker_threads';
import './SortDataDisplay.css';

export interface sortData {
    name: string;
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
    bestCase: string;
    averageCase: string;
    worstCase: string;
    space: string;
}

export const SortDataDisplay = (props: sortData) => {
    return(
        <div style={{margin:"1vw 0", display:"flex", alignItems:"center", flexFlow:"column"}}>
            <div style={{width:"80vw"}}><h1 style={{fontSize:"5vw", textAlign:"start", margin:"0"}}>{props.name}</h1></div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"5vw 0"}}>
                <table style={{borderCollapse:"collapse", width:"80vw", fontSize:"2vw"}}>
                    <tr>
                        <th style={{paddingTop: "12px", paddingBottom: "12px", textAlign: "left", backgroundColor: "rgb(0, 192, 192)", color: "white", border: "1px solid #ddd", padding: "8px"}}>Best Case</th>
                        <th style={{paddingTop: "12px", paddingBottom: "12px", textAlign: "left", backgroundColor: "rgb(0, 192, 192)", color: "white", border: "1px solid #ddd", padding: "8px"}}>Average Case</th>
                        <th style={{paddingTop: "12px", paddingBottom: "12px", textAlign: "left", backgroundColor: "rgb(0, 192, 192)", color: "white", border: "1px solid #ddd", padding: "8px"}}>Worst Case</th>
                        <th style={{paddingTop: "12px", paddingBottom: "12px", textAlign: "left", backgroundColor: "rgb(0, 192, 192)", color: "white", border: "1px solid #ddd", padding: "8px"}}>Space Complexity</th>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>{props.bestCase}</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O({props.averageCase})</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O({props.worstCase})</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O({props.space})</td>
                    </tr>
                </table>
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