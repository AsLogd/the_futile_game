import * as React from "react"

export default class Menu extends React.PureComponent<{}, {}> {
	render() {
		return(
			<div className="Menu-component">
				<h1>The Futile Game</h1>
				<ul>
					<li>Classic</li>
					<li>Non-futile</li>
					<li>About</li>
				</ul>
			</div>
		)
	}
}