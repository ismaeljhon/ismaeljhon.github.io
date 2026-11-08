import {
  siBigcommerce,
  siElectron,
  siNestjs,
  siNextdotjs,
  siShopify,
  siVuedotjs,
  siWoocommerce,
  siWordpress,
  type SimpleIcon,
} from "simple-icons";

const icons: Record<string, SimpleIcon> = {
  WordPress: siWordpress,
  WooCommerce: siWoocommerce,
  Shopify: siShopify,
  BigCommerce: siBigcommerce,
  "Next.js": siNextdotjs,
  NestJS: siNestjs,
  "Vue.js": siVuedotjs,
  Electron: siElectron,
};

/** Monochrome brand logo (inherits the text color). Renders nothing for unknown names. */
export function TechIcon({ name, size = 14 }: { name: string; size?: number }) {
  const icon = icons[name];
  if (!icon) return null;
  return (
    <svg role="img" aria-hidden width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
      <path d={icon.path} />
    </svg>
  );
}
