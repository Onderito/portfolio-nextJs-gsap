interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ref: React.Ref<HTMLButtonElement>;
}

const Button = ({ children, onClick, className, ref }: ButtonProps) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden webkit-clip rounded-[16px] bg-linear-to-t from-[#1a1a1a] to-[#383838] py-3 px-10 font-semibold cursor-pointer ${
        className || ""
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <span
        className="leading-normal text-[16px] text-center text-white tracking-[-0.8px]"
        style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
      >
        {children}
      </span>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.5)]" />
    </button>
  );
};

export default Button;
