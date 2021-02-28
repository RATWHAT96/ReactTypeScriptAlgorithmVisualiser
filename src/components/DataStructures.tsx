import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import {DataStructureDisplay} from './dataStucturesDisplay/DataStructureDisplay';
import {DisplayDataOne, DisplayDataTwo, DisplayDataThree, DisplayDataFour, DisplayDataFive, DisplayDataSix, DisplayDataSeven} from './dataStucturesDisplay/DisplayData';
import {dataStructureData} from './dataStucturesDisplay/DataStructureDisplay'

export const DataStructures = () => {
    return(
        <Router>
        <div className="main">
            <div className="centreDiv">
                <div className="buttonbar">
                    <Link to="/overview"><button>Overview</button></Link>
                    <Link to="/array"><button>Array</button></Link>
                    <Link to="/linkedlist"><button>Linked List</button></Link>
                    <Link to="/stacksandqueues"><button>Stacks/Queues</button></Link>
                    <Link to="/hashmap"><button>HashMaps</button></Link>
                    <Link to="/graphsandtrees"><button>Graphs/Trees</button></Link>
                    <Link to="/heap"><button>Heaps</button></Link>
                </div>
            </div>
            <div className="algoInfoBox">
                <Switch>
                        <Route path="/overview" component={() => <DataStructureDisplay name = {DisplayDataOne.name} image={DisplayDataOne.image} description = {DisplayDataOne.description} averageAcces={DisplayDataOne.averageAccess} averageSearch={DisplayDataOne.averageSearch} averageInsertDelete={DisplayDataOne.averageInsertDelete} worstAccess={DisplayDataOne.worstAccess} worstSearch={DisplayDataOne.worstSearch} worstInsertDelete={DisplayDataOne.worstInsertDelete}/>} /> 
                        <Route path="/array" component={() => <DataStructureDisplay name = {DisplayDataTwo.name} image={DisplayDataTwo.image} description = {DisplayDataTwo.description} averageAcces={DisplayDataTwo.averageAccess} averageSearch={DisplayDataTwo.averageSearch} averageInsertDelete={DisplayDataTwo.averageInsertDelete} worstAccess={DisplayDataTwo.worstAccess} worstSearch={DisplayDataThree.worstSearch} worstInsertDelete={DisplayDataThree.worstInsertDelete}/>} />
                        <Route path="/linkedlist" component={() => <DataStructureDisplay name = {DisplayDataThree.name} image={DisplayDataThree.image} description = {DisplayDataThree.description} averageAcces={DisplayDataThree.averageAccess} averageSearch={DisplayDataThree.averageSearch} averageInsertDelete={DisplayDataThree.averageInsertDelete} worstAccess={DisplayDataThree.worstAccess} worstSearch={DisplayDataThree.worstSearch} worstInsertDelete={DisplayDataThree.worstInsertDelete} />} />     
                        <Route path="/stacksandqueues" component={() => <DataStructureDisplay name = {DisplayDataFour.name} image={DisplayDataFour.image} description = {DisplayDataFour.description} averageAcces={DisplayDataFour.averageAccess} averageSearch={DisplayDataFour.averageSearch} averageInsertDelete={DisplayDataFour.averageInsertDelete} worstAccess={DisplayDataFour.worstAccess} worstSearch={DisplayDataFour.worstSearch} worstInsertDelete={DisplayDataFour.worstInsertDelete}/>} />
                        <Route path="/hashmap" component={() => <DataStructureDisplay name = {DisplayDataFive.name} image={DisplayDataFive.image} description = {DisplayDataFive.description} averageAcces={DisplayDataFive.averageAccess} averageSearch={DisplayDataFive.averageSearch} averageInsertDelete={DisplayDataFive.averageInsertDelete} worstAccess={DisplayDataFive.worstAccess} worstSearch={DisplayDataFive.worstSearch} worstInsertDelete={DisplayDataFive.worstInsertDelete}/>} />
                        <Route path="/graphsandtrees" component={() => <DataStructureDisplay name = {DisplayDataSix.name} image={DisplayDataSix.image} description = {DisplayDataSix.description} averageAcces={DisplayDataSix.averageAccess} averageSearch={DisplayDataSix.averageSearch} averageInsertDelete={DisplayDataSix.averageInsertDelete} worstAccess={DisplayDataSix.worstAccess} worstSearch={DisplayDataSix.worstSearch} worstInsertDelete={DisplayDataSix.worstInsertDelete} />} />
                        <Route path="/heap" component={() => <DataStructureDisplay name = {DisplayDataSeven.name} image={DisplayDataSeven.image} description = {DisplayDataSeven.description} averageAcces={DisplayDataSeven.averageAccess} averageSearch={DisplayDataSeven.averageSearch} averageInsertDelete={DisplayDataSeven.averageInsertDelete} worstAccess={DisplayDataSeven.worstAccess} worstSearch={DisplayDataSeven.worstSearch} worstInsertDelete={DisplayDataSeven.worstInsertDelete} />} />
                </Switch>
            </div>
        </div>
        </Router>
    )
} 


