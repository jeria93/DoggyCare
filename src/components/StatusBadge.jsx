export default function StatusBadge({ present }) {
  const cls = `dogdetail__badge ${present ? "is-present" : "is-away"}`;
  const text = present ? "Present" : "Not present";
  return <span className={cls}>{text}</span>;
}
