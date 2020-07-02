import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
		<Fade top duration={1000} distance="20px">
			<div className="navBar">
				<header className="header">
					<NavLink to="/~sharathg/" tag={Link} className="logo">
						{/* <span className="grey-color"> &lt;</span> */}
						<span className="logo-name">Sharath Chandra Guntuku</span>
						{/* <span className="grey-color">/&gt;</span> */}
					</NavLink>
					<input className="menu-btn" type="checkbox" id="menu-btn" />
					<label className="menu-icon" htmlFor="menu-btn">
						<span className="navicon"></span>
					</label>
					<ul className="menu">
						<li>
							<NavLink
								to="/home"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/education"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								Publications
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/experience"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								CV
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/projects"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								Resources
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/opensource"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								Media
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								Talks
							</NavLink>
						</li>
					</ul>
				</header>
			</div>
		</Fade>
	);
}
export default Header;
