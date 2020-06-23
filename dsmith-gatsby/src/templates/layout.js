import * as React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

// styles
import "../assets/scss/main.scss";

const Layout = ({ children, location }) => {
	const content = (location && location.pathname === "/")
		? (<div>{children}</div>)
		: (<div id="wrapper" className="page"><div>{children}</div></div>);

	return (
		<StaticQuery
			query={graphql`
				query SiteMetadataQuery {
					site {
						siteMetadata {
							title
							description
							author
							keywords
						}
					}
				}
			`}

			render={data => (
				<React.Fragment>
					<Helmet
						title={data.site.siteMetadata.title}
						meta={[
							{ name: "description", content: data.site.siteMetadata.description },
							{ name: "author", content: data.site.siteMetadata.author },
							{ name: "keywords", content: data.site.siteMetadata.keywords }
						]}
					>
						<html lang="en" />
						<link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
					</Helmet>
					{content}
				</React.Fragment>
			)}
		/>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;