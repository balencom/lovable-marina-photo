import logo from "@/assets/logo-marina.png.";

type Props = { className?: string };

/** Marina Photo brand mark: photographer with camera inside a circular stamp. */
export function BrandMark({ className }: Props) {
  return (
    <img
      src={logo}
      alt="Marina Photo logo"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
