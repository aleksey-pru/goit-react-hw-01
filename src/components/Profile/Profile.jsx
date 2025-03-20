const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div>
      <div>
        <img src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>Followers</span>&nbsp;
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>&nbsp;
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>&nbsp;
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
