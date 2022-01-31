import { Link } from "react-router-dom";

export default function Home() {
  return <div>
    Welcome to Home Page <br />
    <Link to="/about">
      ABOUT using LINK
    </Link> <br />
    <a href="/about">
      ABOUT using Anchor
    </a>
  </div>;
}