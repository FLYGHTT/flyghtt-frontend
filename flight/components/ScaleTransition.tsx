

export default function ScaleTransition({ children, path }) {


  return (
    <div className="w-full h-screen bg-blue-500 flex justify-end"  onClick={handleClick} >
      <button className="trigger-button">
        {children}
      </button>
    </div>
  );
}
