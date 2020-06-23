import * as React from "react";
import image01 from "../images/DDS_HS.jpg";

function _setArticleClassName(articleId) {
	const active = this.props.article === articleId ? 'active' : '';
	const timeout = this.props.articleTimeout ? 'timeout' : '';

	return `${active} ${timeout}`;
}

function Article({ articleId, title, children }) {
	let close = (
		<div className="close" onClick={() => { this.props.onCloseArticle(); }}></div>
	);

	return (
		<article id={ articleId } className={_setArticleClassName(articleId)} style={{ display: 'none' }}>
			<h2 className="major">{title}</h2>
			{children}
			{close}
		</article>
	);
}

function ArticleScholarship() {
	return (
		<Article articleId="scholarship" title="Scholarship">
			<span className="image main">
				<img src={image01} alt="Derry Dean Smith" />
			</span>

			<p>The Derry Smith Memorial Athletic Scholarship is an award that honors a student-athlete at Santa Monica High School who embodies the true spirit of SAMOHI and the passion for living life as Derry always had.</p>
			<p>That passion is to seek adventures and new opportunities in all aspects of life, granting the ability to fulfill lifelong aspirations.</p>
			<p>By living life to the fullest and inspiring others to do the same, accepting each individual for who they are and not who they could be allowing them to be free, open and honest in their thoughts, their words and their actions without judgement because you always asked them "How yah doin’?"</p>
		</Article>
	);
}

export default ArticleScholarship;