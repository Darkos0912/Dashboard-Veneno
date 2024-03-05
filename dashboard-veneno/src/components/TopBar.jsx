import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import NotFound from "./NotFound";

function TopBar() {
  const [lastUser, setLastUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4200/api/users/list")
      .then((response) => response.json())
      .then((data) => {
        const users = data.users;
        if (users.length > 0) {
          const latestUser = users[users.length - 1];
          setLastUser(latestUser);
        }
      })
      .catch((error) => {
        <NotFound />;
      });
  }, []);

  if (!lastUser) {
    return <div>Cargando...</div>;
  }

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow" style={{ background: "#202020" }}>

        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>

        <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block"></div>
          <li className="nav-item dropdown no-arrow">
            <Link className="nav-link dropdown-toggle" href="/" id="userDropdown">
              <span className="mr-2 d-none d-lg-inline  small" style={{ color: "#9bcf29" }}>
                {capitalizeFirstLetter(lastUser.name + " " + lastUser.lastname)}
              </span>
              <img
                className="img-profile rounded-circle"
                src={"http://localhost:4200/img/users/" + lastUser.image}
                alt={capitalizeFirstLetter(lastUser.name + " " + lastUser.lastname)}
                width="60"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default TopBar;
