import css from './Item.module.css';

export const Item = ({ data }) => {
  const { label, percentage } = data;
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <li className={css.item} style={{ backgroundColor: '#' + randomColor }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>
        {percentage}
        {'%'}
      </span>
    </li>
  );
};
