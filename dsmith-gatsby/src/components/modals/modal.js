import * as React from "react";

function _setModalClassName({ id, article, articleTimeout }) {
	const active = article === id ? 'active' : '';
	const timeout = articleTimeout ? 'timeout' : '';

	return `${active} ${timeout}`;
}

export default function ({ id, title, article, articleTimeout, children, onCloseArticle }) {
	const closebox = (
		<div className="close" role="button" tabIndex={0} onClick={() => { onCloseArticle(); }}></div>
	);
	
	return (
		<article id={id} className={_setModalClassName({ id, article, articleTimeout })} style={{ display: 'none' }}>
			<h2 className="major">{title}</h2>
			{children}
			{closebox}
		</article>
	);
};