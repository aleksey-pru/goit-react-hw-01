import css from './Profile.module.css'
import clsx from 'clsx';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(css.container)}>
      <div className={clsx(css.info)}>
        <img className={clsx(css.userImg)} src={image} alt="User avatar" width={256}/>
        <p className={clsx(css.userName)}>{name}</p>
        <p className={clsx(css.userTag)}>@{tag}</p>
        <p className={clsx(css.userLoc)}>{location}</p>
      </div>
      <ul className={clsx(css.stats)}>
        <li className={clsx(css.statItem)}>
          <span className={clsx(css.label)}>Followers</span>
          <span className={clsx(css.value)}>{stats.followers}</span>
        </li>
        <li className={clsx(css.statItem)}>
          <span className={clsx(css.label)}>Views</span>
          <span className={clsx(css.value)}>{stats.views}</span>
        </li>
        <li className={clsx(css.statItem)}>
          <span className={clsx(css.label)}>Likes</span>
          <span className={clsx(css.value)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
