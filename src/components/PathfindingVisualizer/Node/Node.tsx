import './Node.css';

interface nodeData{
  col: number;
  isFinish: boolean;
  isStart: boolean;
  isWall: boolean;
  mouseIsPressed: boolean;
  onMouseDown: Function;
  onMouseEnter: Function;
  onMouseUp: Function;
  row: number;

}

export const Node = (props: nodeData) => {
    
    const extraClassName = props.isFinish
      ? 'node-finish'
      : props.isStart
      ? 'node-start'
      : props.isWall
      ? 'node-wall'
      : '';

    return (
      <div
        id={`node-${props.row}-${props.col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => props.onMouseDown(props.row, props.col)}
        onMouseEnter={() => props.onMouseEnter(props.row, props.col)}
        onMouseUp={() => props.onMouseUp()}></div>
    );
}
