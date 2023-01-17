export const Item = ({ data }) => {
  const { label, percentage } = data;
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};
