import Profile from "./components/Profile/Profile";
import Friendlist from "./components/Friendlist/Friendlist";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json'


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
