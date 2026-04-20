type InteriorPassThroughProps = {
  text?: string;
};

export default function InteriorPassThrough({
  text = "Boutique Executive Search for Renewable Energy & Infrastructure",
}: InteriorPassThroughProps) {
  return (
    <div className="max-w-5xl mx-auto mb-12 md:mb-16 text-center">
      <div className="flex items-center justify-center gap-4 opacity-40">
        <div className="h-px w-12 md:w-16 bg-[#111111]" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-balance">
          {text}
        </span>
        <div className="h-px w-12 md:w-16 bg-[#111111]" />
      </div>
    </div>
  );
}
