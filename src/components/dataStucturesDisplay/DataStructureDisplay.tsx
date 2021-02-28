
export interface dataStructureData {
    name: string;
    image: string;
    description: string;
    averageAccess: string;
    averageSearch: string;
    averageInsertDelete: string;
    worstAccess: string;
    worstSearch: string;
    worstInsertDelete: string;
}

export function DataStructureDisplay(props:any) {
    console.log(props.name)
    return(
        <>
            <h1>{props.name}</h1>
            <img src={props.image}></img>
            <p>{props.description}</p>
            <ul className="sortDataList">
                <li>Average Access:  O({props.averageAccess})</li>
                <li>Average Search:  O({props.averageSearch})</li>
                <li>Average Insert/Delete:  O({props.averageInsertDelete})</li>
                <li>Worst Access:  O({props.worstAccess})</li>
                <li>Worst Search:  O({props.worstSearch})</li>
                <li>Worst Insert/Delete:  O({props.worstInsertDelete})</li>
            </ul>
        </>
    );
}