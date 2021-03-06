import PropTypes from 'prop-types'
import React from 'react'
import Navg from "./navg";

const Header = props => (
	<header id="header" style={props.timeout ? { display: 'none' } : {}}>
		{/* <div className="logo">
      <span className="icon fa-diamond"></span>
    </div> */}
		<div className="content">
			<div className="inner">
				{/* <h1>Dimension</h1> */}
				<h1>Derry Dean Smith</h1>
				<h2>Memorial Athletic Scholarship</h2>
				{/* <p>
			The Derry Smith Athletic Scholarship is an award that honors
			<br />
			a student-athlete at Santa Monica High School who embodies the true spirit
			<br />
			of SAMOHI and the passion for living life as Derry always had.
		</p> */}
				{/* <p>
          A fully responsive site template designed by{' '}
          <a href="https://html5up.net">HTML5 UP</a> and released
          <br />
          for free under the{' '}
          <a href="https://html5up.net/license">Creative Commons</a> license.
        </p> */}
			</div>
		</div>
		<Navg {...props} />
	</header>
)

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool,
}

export default Header;