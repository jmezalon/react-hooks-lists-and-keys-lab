import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksDisplay = links.map(link => {
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {linksDisplay}
    </nav>
    );
}

export default NavBar;
