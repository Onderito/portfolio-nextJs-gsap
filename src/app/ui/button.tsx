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
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-[10px] bg-[#1A1A1A] text-white tracking-tight py-3 shadow-white-blur px-10 text-[16px] font-bold cursor-pointer ${
        className || ""
      }`}
    >
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="w-[140px] h-[52px] bg-white/30 rounded-full blur-[32px]" />
      </span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
