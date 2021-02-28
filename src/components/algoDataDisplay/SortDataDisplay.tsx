import './SortDataDisplay.css';

export interface sortData {
    name: string;
    description: string;
    bestCase: string;
    averageCase: string;
    worstCase: string;
    space: string;
}

export const SortDataDisplay = (props: sortData) => {
    return(
        <div style={{margin:"5vh 0", display:"flex", alignItems:"center", flexFlow:"column"}}>
            <div style={{width:"80vw"}}><h1 style={{textAlign:"start"}}>{props.name}</h1></div>
            <p>{props.description} </p>
            <ul style={{textAlign:"start",  width:"80vw"}} className="sortDataList">
                <li style={{margin:"0"}}>Best Case:  O({props.bestCase})</li>
                <li>Average Case:  O({props.averageCase})</li>
                <li>Worst Case:  O({props.worstCase})</li>
                <li>Space:  O({props.space})</li>
            </ul>
        </div>
    );
}