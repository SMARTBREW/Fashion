export function ChevronDivider() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
      <div
        className="my-10 h-2.5 w-full md:my-14"
        aria-hidden
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #111 0px,
            #111 6px,
            #fff 6px,
            #fff 12px
          )`,
        }}
      />
    </div>
  );
}
