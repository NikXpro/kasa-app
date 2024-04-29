import "./Tag.scss";

export type TagProps = {
  name: string;
};

export const Tag = (props: TagProps) => {
  return (
    <>
      <div className="tag">
        <span className="tag-text">{props.name}</span>
      </div>
    </>
  );
};
