import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddProject from '../../containers/AddProject';
import { deleteProjects } from '../../actions';

export class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleAdd: false,
			toggleDelete: false,
			func: props.dispatch
		}
		this.onToggleAdd = this.onToggleAdd.bind(this);
		this.onToggleDelete = this.onToggleDelete.bind(this);
	}

	onToggleAdd () {
		this.setState( state => ({ toggleAdd: !this.state.toggleAdd }) );
	}

	onToggleDelete () {
		this.state.func( deleteProjects( ) );
	}

	render() {
		return (
			<>
				<li onClick={ this.onToggleAdd }>Add project</li>
				{
					this.state.toggleAdd &&
					<AddProject />
				}
				<li onClick={ this.onToggleDelete }>Delete all</li>
			</>
		);
	}
}

export default connect()(Menu);