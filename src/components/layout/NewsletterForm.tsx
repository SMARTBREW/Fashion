"use client";

export function NewsletterForm() {
  return (
    <form
      className="mt-4 space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="email"
        placeholder="E-mail"
        className="w-full border border-neutral-300 bg-white px-3 py-2.5 text-[12px] outline-none focus:border-black"
      />
      <button
        type="submit"
        className="w-full bg-black py-2.5 text-[11px] tracking-[0.2em] text-white uppercase transition-colors hover:bg-neutral-800"
      >
        Subscribe
      </button>
    </form>
  );
}
