import * as React from "react";
import Modal from "./modal";

export default function (props) {
	return (
		<Modal id="recipients" title="Past Recipients" {...props}>
			<table>
				<thead>
					<tr>
						<th>Year</th>
						<th>Recipient</th>
						<th>Sport</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>2020</td>
						<td>Angelina De La Trinidad</td>
						<td>Soccer</td>
					</tr>
					<tr>
						<td>2019</td>
						<td>Edgar Ruvalcaba Godoy</td>
						<td>Football</td>
					</tr>
				</tbody>
			</table>
			<p>
				Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
				eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
				erat volutpat. Praesent urna nisi, fringila lorem et vehicula
				lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
				Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
				Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
				amet.
			</p>
		</Modal>
	);
};