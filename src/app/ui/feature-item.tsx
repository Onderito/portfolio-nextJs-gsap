interface FeatureItemProps {
  text: string;
  highlighted?: boolean;
  accentColor: string;
}

export function FeatureItem({
  text,
  highlighted,
  accentColor,
}: FeatureItemProps) {
  const color = highlighted ? accentColor : "#C4C4C4";

  return (
    <div className="content-stretch flex gap-[7px] items-center">
      {/* Check Icon */}
      <div className="relative shrink-0 size-[24px]">
        <div className="absolute inset-[20.83%]">
          <div className="absolute inset-[-5.36%]"></div>
        </div>
      </div>

      {/* Feature Text */}
      <p
        className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px]"
        style={{ color }}
      >
        {text}
      </p>
    </div>
  );
}
