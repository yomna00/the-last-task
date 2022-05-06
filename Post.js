import { useState } from 'react';
const Post = (props) => {
  let [showdate, setShowdate] = useState(true);
  const myFunction = () => {
    setShowdate(false);
  };
  return (
    <div>
      <h1>{props.data?.title}</h1>
      <button onClick={myFunction}>Hide Date</button>
      <div>
        {showdate && <span>{props.data?.date}</span>}
        <span>by {props.data?.author}</span>
      </div>
      <div>{props.data?.contents}</div>
    </div>
  );
};
export default Post;