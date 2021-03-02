export function OverviewDisplay() {

    return(
        <>  
            <div style={{display:"flex", flexFlow:"column", justifyContent:"center", alignItems:"center", marginTop:"2vw"}}>
            <div style={{width:"100vw", display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                <h1 style={{fontSize:"3vw", marginTop:"0", textAlign:"start"}}>Overview</h1>
                    <p style={{fontSize:"2vw", width:"80vw", textAlign:"start", marginTop:"2vw"}}>
                        A data structure is a particular way of organizing data 
                        in a computer so that it can be used effectively. 
                        Knowing which data structure to use helps improves the performance of the code.  
                        Data structures differ in terms of how easily it is to access an element when its location is known,
                        search for an element and insert/delete an element from the structure.
                    </p>
                </div>   
            </div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"5vh 0"}}>
                <table style={{borderCollapse:"collapse", width:"80vw", fontSize:"2vw"}}>
                    <tr>
                    <th style={{paddingTop: "12px", paddingBottom: "12px", textAlign: "left", backgroundColor: "rgb(0, 192, 192)", color: "white", border: "1px solid #ddd", padding: "8px"}}>Data Stucture</th>
                        <th style={{paddingTop: "12px", paddingBottom: "12px", textAlign: "left", backgroundColor: "rgb(0, 192, 192)", color: "white", border: "1px solid #ddd", padding: "8px"}}>Avg Access</th>
                        <th style={{paddingTop: "12px", paddingBottom: "12px", textAlign: "left", backgroundColor: "rgb(0, 192, 192)", color: "white", border: "1px solid #ddd", padding: "8px"}}>Avg Search</th>
                        <th style={{paddingTop: "12px", paddingBottom: "12px", textAlign: "left", backgroundColor: "rgb(0, 192, 192)", color: "white", border: "1px solid #ddd", padding: "8px"}}>Avg Insert/Delete</th>
                        <th style={{paddingTop: "12px", paddingBottom: "12px", textAlign: "left", backgroundColor: "rgb(0, 192, 192)", color: "white", border: "1px solid #ddd", padding: "8px"}}>Worst Access</th>
                        <th style={{paddingTop: "12px", paddingBottom: "12px", textAlign: "left", backgroundColor: "rgb(0, 192, 192)", color: "white", border: "1px solid #ddd", padding: "8px"}}>Worst Search</th>
                        <th style={{paddingTop: "12px", paddingBottom: "12px", textAlign: "left", backgroundColor: "rgb(0, 192, 192)", color: "white", border: "1px solid #ddd", padding: "8px"}}>Worst Insert/Delete</th>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>Array</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(1)</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(n)</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(n)</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(1)</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(n)</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(n)</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>Linked List</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(n)</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(n)</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(1)</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(n)</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(n)</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(1)</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>Stack/Queues</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(n)</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(n)</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(1)</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(n)</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(n)</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O(1)</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>HashMaps</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>N/A</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>1</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>1</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>N/A</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>n</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>n</td>
                    </tr>
                </table>
            </div>        
        </>
    );
}