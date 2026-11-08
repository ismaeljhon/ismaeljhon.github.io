/** Renders a clearly marked placeholder for info the owner still needs to supply. */
export function ToBeAdded({ what }: { what: string }) {
  return <span className="italic opacity-60">[{what} — to be added]</span>;
}
