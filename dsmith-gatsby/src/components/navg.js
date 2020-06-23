import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

export default function (props) {
	return (
		<StaticQuery
			query={graphql`
				query SiteNavigationQuery {
					site {
						siteMetadata {
							navigation {
								id
								title
							}
						}
					}
				}
			`}
			render={data => (
				<nav>
					<ul>
						{data.site.siteMetadata.navigation.map((value, index) => (
							<li key={index}>
								<button onClick={() => { props.onOpenArticle(value.id); }}>{value.title}</button>
							</li>
						))}
					</ul>
				</nav>
			)}
		/>
	);
};