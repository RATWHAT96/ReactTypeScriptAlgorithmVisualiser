import React from 'react';
import './SortDataDisplay.css';

export default class SortDataDisplay extends React.Component<any,any> {
    constructor(props: any){
        super(props);

    }

    render(){
        return(
            <ul className="sortDataList">
                <li>Name:  {this.props.name}</li>
                <li>Best Case:  O({this.props.bestCase})</li>
                <li>Average Case:  O({this.props.averageCase})</li>
                <li>Worst Case:  O({this.props.worstCase})</li>
                <li>Space:  O({this.props.space})</li>
            </ul>
        );
    }
}