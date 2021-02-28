import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import {DataStructureDisplay} from './dataStucturesDisplay/DataStructureDisplay';
import {DisplayDataOne, DisplayDataTwo, DisplayDataThree, DisplayDataFour, DisplayDataFive, DisplayDataSix, DisplayDataSeven, DisplayDataEight, DisplayDataNine} from './dataStucturesDisplay/DisplayData';

export const DataStructures = () => {
    return(
        <Router>
        <div className="main">
            <div className="centreDiv">
                <div className="buttonbar">
                    <Link to="/overview"><button>Overview</button></Link>
                    <Link to="/array"><button>Array</button></Link>
                    <Link to="/linkedlist"><button>Linked List</button></Link>
                    <Link to="/stack"><button>Stacks/Queues</button></Link>
                    <Link to="/queue"><button>Stacks/Queues</button></Link>
                    <Link to="/hashmap"><button>HashMaps</button></Link>
                    <Link to="/graph"><button>Graphs/Trees</button></Link>
                    <Link to="/tree"><button>Graphs/Trees</button></Link>
                    <Link to="/heap"><button>Heaps</button></Link>
                </div>
            </div>
            <div className="algoInfoBox">
                <Switch>
                        <Route path="/overview" component={() => <DataStructureDisplay name = {DisplayDataOne.name} image={DisplayDataOne.image} description = {DisplayDataOne.description} averageAccess={DisplayDataOne.averageAccess} averageSearch={DisplayDataOne.averageSearch} averageInsertDelete={DisplayDataOne.averageInsertDelete} worstAccess={DisplayDataOne.worstAccess} worstSearch={DisplayDataOne.worstSearch} worstInsertDelete={DisplayDataOne.worstInsertDelete}/>} /> 
                        <Route path="/array" component={() => <DataStructureDisplay name = {DisplayDataTwo.name} image={DisplayDataTwo.image} description = {DisplayDataTwo.description} averageAccess={DisplayDataTwo.averageAccess} averageSearch={DisplayDataTwo.averageSearch} averageInsertDelete={DisplayDataTwo.averageInsertDelete} worstAccess={DisplayDataTwo.worstAccess} worstSearch={DisplayDataThree.worstSearch} worstInsertDelete={DisplayDataThree.worstInsertDelete}/>} />
                        <Route path="/linkedlist" component={() => <DataStructureDisplay name = {DisplayDataThree.name} image={DisplayDataThree.image} description = {DisplayDataThree.description} averageAccess={DisplayDataThree.averageAccess} averageSearch={DisplayDataThree.averageSearch} averageInsertDelete={DisplayDataThree.averageInsertDelete} worstAccess={DisplayDataThree.worstAccess} worstSearch={DisplayDataThree.worstSearch} worstInsertDelete={DisplayDataThree.worstInsertDelete} />} />     
                        <Route path="/stack" component={() => <DataStructureDisplay name = {DisplayDataFour.name} image={DisplayDataFour.image} description = {DisplayDataFour.description} averageAccess={DisplayDataFour.averageAccess} averageSearch={DisplayDataFour.averageSearch} averageInsertDelete={DisplayDataFour.averageInsertDelete} worstAccess={DisplayDataFour.worstAccess} worstSearch={DisplayDataFour.worstSearch} worstInsertDelete={DisplayDataFour.worstInsertDelete}/>} />
                        <Route path="/queue" component={() => <DataStructureDisplay name = {DisplayDataFive.name} image={DisplayDataFive.image} description = {DisplayDataFive.description} averageAccess={DisplayDataFive.averageAccess} averageSearch={DisplayDataFive.averageSearch} averageInsertDelete={DisplayDataFive.averageInsertDelete} worstAccess={DisplayDataFive.worstAccess} worstSearch={DisplayDataFive.worstSearch} worstInsertDelete={DisplayDataFive.worstInsertDelete}/>} />
                        <Route path="/hashmap" component={() => <DataStructureDisplay name = {DisplayDataSix.name} image={DisplayDataSix.image} description = {DisplayDataSix.description} averageAccess={DisplayDataSix.averageAccess} averageSearch={DisplayDataSix.averageSearch} averageInsertDelete={DisplayDataSix.averageInsertDelete} worstAccess={DisplayDataSix.worstAccess} worstSearch={DisplayDataSix.worstSearch} worstInsertDelete={DisplayDataSix.worstInsertDelete}/>} />
                        <Route path="/graph" component={() => <DataStructureDisplay name = {DisplayDataSeven.name} image={DisplayDataSeven.image} description = {DisplayDataSeven.description} averageAccess={DisplayDataSeven.averageAccess} averageSearch={DisplayDataSeven.averageSearch} averageInsertDelete={DisplayDataSeven.averageInsertDelete} worstAccess={DisplayDataSeven.worstAccess} worstSearch={DisplayDataSeven.worstSearch} worstInsertDelete={DisplayDataSeven.worstInsertDelete} />} />
                        <Route path="/tree" component={() => <DataStructureDisplay name = {DisplayDataEight.name} image={DisplayDataEight.image} description = {DisplayDataEight.description} averageAccess={DisplayDataEight.averageAccess} averageSearch={DisplayDataEight.averageSearch} averageInsertDelete={DisplayDataEight.averageInsertDelete} worstAccess={DisplayDataEight.worstAccess} worstSearch={DisplayDataEight.worstSearch} worstInsertDelete={DisplayDataEight.worstInsertDelete} />} />
                        <Route path="/heap" component={() => <DataStructureDisplay name = {DisplayDataNine.name} image={DisplayDataNine.image} description = {DisplayDataNine.description} averageAccess={DisplayDataNine.averageAccess} averageSearch={DisplayDataNine.averageSearch} averageInsertDelete={DisplayDataNine.averageInsertDelete} worstAccess={DisplayDataNine.worstAccess} worstSearch={DisplayDataNine.worstSearch} worstInsertDelete={DisplayDataNine.worstInsertDelete} />} />
                </Switch>
            </div>
        </div>
        </Router>
    )
} 


