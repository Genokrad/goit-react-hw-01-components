import css from '../statistics.module.css';

export const Title = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};
