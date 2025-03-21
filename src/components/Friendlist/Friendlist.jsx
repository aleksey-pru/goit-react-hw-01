import css from './Friendlist.module.css'
import clsx from 'clsx';

import FriendListItem from '../FriendListItem/FriendListItem';

const Friendlist = ({friends}) => {
  return (
    <ul className={css.container}>
        {friends.map((friend) => {
            return <li className={clsx(css.item)} key={friend.id}><FriendListItem 
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            /></li>
        })}
    </ul>
  )
}

export default Friendlist