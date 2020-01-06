import React from 'react'
import { render } from 'react-dom'

import Menu from "components/Menu/Menu"
import Futile from "components/Futile/Futile"

import "./style.scss"

enum AppView {
	MAIN_MENU,

}

interface AppState {
	view: AppView
}

class App extends React.Component<{}, AppState> {
	state = {
		view: AppView.MAIN_MENU
	}

	render() {
		return (
			<div className="App-component">

			</div>
		)
	}
}

render(<App />, document.getElementById('app'));