import React from "react";
import "./index.css";
import { Button, Input, Title, LinkWord } from "../styled";
import { Link } from "react-router-dom";
import videoBg from "../vid.mp4";
export default function FrontPage() {
  return (
    <div className="main">
      <video src={videoBg} autoPlay muted className="video" />
      <div className="content">
        Our website is created for people who want to play football. On Slice of
        Football you can create Tournaments or chat with other players.
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
}
