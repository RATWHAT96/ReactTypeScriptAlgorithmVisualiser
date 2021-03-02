import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import {DataStructureDisplay} from './dataStucturesDisplay/DataStructureDisplay';
import {DisplayDataTwo, DisplayDataThree, DisplayDataFour, DisplayDataFive, DisplayDataSix, DisplayDataSeven, DisplayDataEight, DisplayDataNine} from './dataStucturesDisplay/DisplayData';
import {OverviewDisplay} from './dataStucturesDisplay/OverviewDisplay';
import {Graphs, Trees} from './dataStucturesDisplay/Graphs';

export const DataStructures = () => {
    return(
        <Router>
        <div className="main">
            <div className="centreDiv">
                <div className="buttonbar" style={{width:"100vw"}}>
                    <Link className="link" to="/overview">Overview</Link>
                    <Link className="link" to="/array">Array</Link>
                    <Link className="link" to="/linkedlist">Linked List</Link>
                    <Link className="link" to="/stack">Stack</Link>
                    <Link className="link" to="/queue">Queue</Link>
                    <Link className="link" to="/hashmap">HashMap</Link>
                    <Link className="link" to="/graph">Graph</Link>
                    <Link className="link" to="/tree">Tree</Link>
                </div>
            </div>
            <div className="algoInfoBox">
                <Switch>
                        <Route path="/overview" component={() => <OverviewDisplay/>} /> 
                        <Route path="/array" component={() => <DataStructureDisplay name = {DisplayDataTwo.name} image={DisplayDataTwo.image} display={DisplayDataTwo.display} description = {DisplayDataTwo.description} averageAccess={DisplayDataTwo.averageAccess} averageSearch={DisplayDataTwo.averageSearch} averageInsertDelete={DisplayDataTwo.averageInsertDelete} worstAccess={DisplayDataTwo.worstAccess} worstSearch={DisplayDataThree.worstSearch} worstInsertDelete={DisplayDataThree.worstInsertDelete}/>} />
                        <Route path="/linkedlist" component={() => <DataStructureDisplay name = {DisplayDataThree.name} image={DisplayDataThree.image} display={DisplayDataThree.display} description = {DisplayDataThree.description} averageAccess={DisplayDataThree.averageAccess} averageSearch={DisplayDataThree.averageSearch} averageInsertDelete={DisplayDataThree.averageInsertDelete} worstAccess={DisplayDataThree.worstAccess} worstSearch={DisplayDataThree.worstSearch} worstInsertDelete={DisplayDataThree.worstInsertDelete} />} />     
                        <Route path="/stack" component={() => <DataStructureDisplay name = {DisplayDataFour.name} image={DisplayDataFour.image} display={DisplayDataFour.display} description = {DisplayDataFour.description} averageAccess={DisplayDataFour.averageAccess} averageSearch={DisplayDataFour.averageSearch} averageInsertDelete={DisplayDataFour.averageInsertDelete} worstAccess={DisplayDataFour.worstAccess} worstSearch={DisplayDataFour.worstSearch} worstInsertDelete={DisplayDataFour.worstInsertDelete}/>} />
                        <Route path="/queue" component={() => <DataStructureDisplay name = {DisplayDataFive.name} image={DisplayDataFive.image} display={DisplayDataFive.display} description = {DisplayDataFive.description} averageAccess={DisplayDataFive.averageAccess} averageSearch={DisplayDataFive.averageSearch} averageInsertDelete={DisplayDataFive.averageInsertDelete} worstAccess={DisplayDataFive.worstAccess} worstSearch={DisplayDataFive.worstSearch} worstInsertDelete={DisplayDataFive.worstInsertDelete}/>} />
                        <Route path="/hashmap" component={() => <DataStructureDisplay name = {DisplayDataSix.name} image={DisplayDataSix.image} display={DisplayDataSix.display} description = {DisplayDataSix.description} averageAccess={DisplayDataSix.averageAccess} averageSearch={DisplayDataSix.averageSearch} averageInsertDelete={DisplayDataSix.averageInsertDelete} worstAccess={DisplayDataSix.worstAccess} worstSearch={DisplayDataSix.worstSearch} worstInsertDelete={DisplayDataSix.worstInsertDelete}/>} />
                        <Route path="/graph" component={() => <Graphs/>} />
                        <Route path="/tree" component={() => <Trees/>} />
                </Switch>
            </div>
        </div>
        </Router>
    )
} 


