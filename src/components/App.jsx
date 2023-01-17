import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './Friends/Friends';
import { TransactionHistory } from './Transactions/Transactions';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <>
        <Profile user={user} />
        <Statistics data={data} title="Uploads Stats" />
        <Statistics data={data} />
        <Friends friends={friends} />
        <TransactionHistory transactions={transactions} />
      </>
    </div>
  );
};
