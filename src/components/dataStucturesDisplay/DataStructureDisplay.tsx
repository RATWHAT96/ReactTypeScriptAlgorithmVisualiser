export interface dataStructureData {
    name: string;
    image: string;
    display: string;
    description: string;
    averageAccess: string;
    averageSearch: string;
    averageInsertDelete: string;
    worstAccess: string;
    worstSearch: string;
    worstInsertDelete: string;
}

export function DataStructureDisplay(props:dataStructureData) {

    return(
        <>  
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"2vw"}}>
                <h1 style={{fontSize:"3vw", marginTop:"0"}}>{props.name}</h1>
            </div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"5vh 0"}}>
                <table style={{borderCollapse:"collapse", width:"80vw", fontSize:"2vw"}}>
                    <tr>
                        <th style={{paddingTop: "12px", paddingBottom: "12px", textAlign: "left", backgroundColor: "rgb(0, 192, 192)", color: "white", border: "1px solid #ddd", padding: "8px"}}>Case</th>
                        <th style={{paddingTop: "12px", paddingBottom: "12px", textAlign: "left", backgroundColor: "rgb(0, 192, 192)", color: "white", border: "1px solid #ddd", padding: "8px"}}>Access</th>
                        <th style={{paddingTop: "12px", paddingBottom: "12px", textAlign: "left", backgroundColor: "rgb(0, 192, 192)", color: "white", border: "1px solid #ddd", padding: "8px"}}>Search</th>
                        <th style={{paddingTop: "12px", paddingBottom: "12px", textAlign: "left", backgroundColor: "rgb(0, 192, 192)", color: "white", border: "1px solid #ddd", padding: "8px"}}>Insert/Delete</th>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>Average</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O({props.averageAccess})</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O({props.averageSearch})</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O({props.averageInsertDelete})</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>Worst</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O({props.worstAccess})</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}} >O({props.worstSearch})</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>O({props.worstInsertDelete})</td>
                    </tr>
                </table>
            </div>      
            <div style={{width:"100vw", display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                <p style={{fontSize:"2vw", width:"80vw", textAlign:"start"}}>{props.description}</p>
                <img style={{width:"70vw", height:"35vw", display:props.display}} src={props.image}></img>
            </div>
        </>
    );
}