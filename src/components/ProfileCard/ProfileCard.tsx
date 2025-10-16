interface Props {
  avatar: string;
  name: string;
  description: string;
}

function ProfileCard(props: Props) {
  const { avatar, name, description } = props;
  return (
    <div>
      <h2>{name}</h2>
      <img src={avatar} alt={name} width={"200px"}/>
      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;
