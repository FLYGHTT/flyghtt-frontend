
const ContextMenuItem = ({
  text,
  onClick,
  disabled,
}: {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`flex items-center   text-sm cursor-pointer w-full px-6 py-2 transition duration-150 ease-in-out 
       hover:bg-green/20`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ContextMenuItem;
