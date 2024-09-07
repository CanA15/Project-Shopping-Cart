import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div>Error, Please return to the to the Homepage</div>
      <Link to="/">
        <button>return</button>
      </Link>
    </>
  );
}

export default Error;
