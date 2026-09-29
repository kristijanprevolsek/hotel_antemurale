import { useReveal } from "../useReveal.js";

export default function Reveal({ as: Tag = "div", children, ...props }) {
  const ref = useReveal();
  return <Tag ref={ref} {...props}>{children}</Tag>;
}
