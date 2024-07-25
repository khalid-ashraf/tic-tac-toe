const Cell = ({ cell, id }) => {
  return (
    <div className='square' id={id}>
      <div className={cell}></div>
    </div>
  );
};
export default Cell;
