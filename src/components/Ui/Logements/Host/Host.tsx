import "./Host.scss";

export type HostProps = {
  name: string;
  picture: string;
};

export const Host = (props: HostProps) => {
  const { name, picture } = props;
  const [firstName, lastName] = name.split(" ");

  return (
    <>
      <div className="host">
        <div className="host-name">
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <div className="host-picture">
          <img src={picture} alt={name} />
        </div>
      </div>
    </>
  );
};
