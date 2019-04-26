import React from "react";
import "./Nav.css";

const Nav = props => (
<nav>
    <ul>
        <li className="brand">
 <a href="/clickygame/"> {props.title} </a>
 </li>

 <li id="rw">
        {props.rightWrong}
      </li>

<li>
  Current Score: {props.score}
</li>

<li>
  Top Score: {props.topScore}
</li>

</ul>
</nav>
);

export default Nav;