interface AuroraOverlayProps {
  className?: string;
}

export default function AuroraOverlay({
  className = "",
}: AuroraOverlayProps) {
  return (
    <>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_15%_8%,rgba(93,67,164,0.18),transparent_35%),radial-gradient(circle_at_92%_45%,rgba(196,127,61,0.24),transparent_42%),radial-gradient(circle_at_72%_82%,rgba(180,52,52,0.2),transparent_34%)] ${className}`}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_1px_0px_rgba(255,255,255,0.5)]"
      />
    </>
  );
}
