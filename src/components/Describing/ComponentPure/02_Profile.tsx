import '../../../App.css';

type Person = {
  name: string;
  image: string;
};

export default function Profile({ person }: { person: Person }) {
  return (
    <div className="profile">
      <Header person={person} />
      <Avatar person={person} />
    </div>
  );
}

function Header({ person }: { person: Person }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }: { person: Person }) {
  return (
    <img
      className="avatar"
      src={person.image}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}
