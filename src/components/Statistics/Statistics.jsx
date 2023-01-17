import { Item } from './Item/Item';
import { Title } from './Title/Title';

export const Statistics = ({ title, data }) => {
  return (
    <section className="statistics">
      {title && <Title title={title} />}
      <ul className="stat-list">
        {data.map(data => {
          return <Item key={data.id} data={data} />;
        })}
      </ul>
    </section>
  );
};

// return data.map(oneStat => {
//   const { id, label, percentage } = oneStat;

// export const Statistics = ({ data }) => {
//   const statistics = data.map(oneStat => {
//     const { id, label, percentage } = oneStat;
//     return (
//       <section class="statistics">
//         <h2 class="title">Upload stats</h2>

//         <ul class="stat-list">
//           <li class="item" id={id}>
//             <span class="label">{label}</span>
//             <span class="percentage">{percentage}</span>
//           </li>
//         </ul>
//       </section>
//     );
//   });
// };
