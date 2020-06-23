import * as React from "react";
import Modal from "./modal";

export default function (props) {
	return (
		<Modal id="scholarship" title="Scholarship" {...props}>
			<p>The Derry Smith Memorial Athletic Scholarship is an award that honors a student-athlete at Santa Monica High School who embodies the true spirit of SAMOHI and the passion for living life as Derry always had.</p>
			<p>That passion is to seek adventures and new opportunities in all aspects of life, granting the ability to fulfill lifelong aspirations.</p>
			<p>By living life to the fullest and inspiring others to do the same, accepting each individual for who they are and not who they could be allowing them to be free, open and honest in their thoughts, their words and their actions without judgement because you always asked them "How yah doin’?"</p>
		</Modal>
	);
};