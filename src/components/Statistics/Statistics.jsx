import PropTypes from 'prop-types';
import { Item } from './Item/Item';
import { Title } from './Title/Title';
import css from './statistics.module.css';

export const Statistics = ({ title, data }) => {
  return (
    <section className={css.statistics}>
      <div>
        {title && <Title title={title} />}
        <ul className={css.statList}>
          {data.map(data => {
            return <Item key={data.id} data={data} />;
          })}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
