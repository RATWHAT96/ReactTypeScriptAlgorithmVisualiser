import './SortDataDisplay.css';

interface sortData {
    name: string;
    bestCase: string;
    averageCase: string;
    worstCase: string;
    space: string;
}

export const SortDataDisplay = (props: sortData) => {
    return(
        <ul className="sortDataList">
            <li>Name:  {props.name}</li>
            <li>Best Case:  O({props.bestCase})</li>
            <li>Average Case:  O({props.averageCase})</li>
            <li>Worst Case:  O({props.worstCase})</li>
            <li>Space:  O({props.space})</li>
        </ul>
    );
}