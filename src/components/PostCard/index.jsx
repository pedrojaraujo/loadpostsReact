export const PostCard = ({ cover, title, body }) => {
  return (
    <div className="post">
      {cover && <img src={cover} alt={title} />}
      <div className="post-content">
        <h1> {title} </h1>
        <p> {body} </p>
      </div>
    </div>
  );
};
