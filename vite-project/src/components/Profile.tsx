type ProfileProps = {
  name: string;
  email: string;
};


const Profile = ({ name, email }: ProfileProps) => {
  return (
    <div className="profile">
      <h1>{name}'s Profile</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;