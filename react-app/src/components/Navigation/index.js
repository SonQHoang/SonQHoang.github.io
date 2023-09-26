import React from 'react';
import { useSelector } from 'react-redux';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className="nav-container">
			<div className="nav-logo">
				Sean Hoang
			</div>
			<div className="nav-links">
				<span className="link-holder">
					<a href="#about-container">
						about
					</a>
				</span>
				<span className="link-holder">
					<a href="#my-projects">
						projects
					</a>
				</span>
				<span className="link-holder">
					<a href="#contact-holder">
						contact
					</a>
				</span>
				<span className="link-holder resume">
				<a id="resume-link" class="resume-link" href="https://docs.google.com/document/d/1s6BUVEEoHmMqzJNWmTeiIrAHmrNcyNgyxwYjatk9cxs/edit" target="_blank" rel="noopener noreferrer">resume</a>
				</span>
			</div>
		</div>
	);
}

export default Navigation;