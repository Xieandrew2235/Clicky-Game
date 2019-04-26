import React from "react";
import "./Nav.css";

const Nav = props => (
<nav>
    <ul>
        <li className="brand">
 <a href="/"> {props.title} </a>
 </li>

<li id="rw">{props.rightwrong}</li>

<li>
  Current Score: {props.score}
</li>

<li>
  Top Score: {props.topscore}
</li>

</ul>
</nav>
);

export default Nav;