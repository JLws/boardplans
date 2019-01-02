import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddProject from '../../containers/AddProject';
import { deleteProjects } from '../../actions';

export class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleAdd: false
		}
		this.onToggleAdd = this.onToggleAdd.bind(this);
		this.onDelete = () => this.props.deleteAll();
	}

	onToggleAdd () {
		this.setState( state => ({ toggleAdd: !this.state.toggleAdd }) );
	}

	render() {
		return (
			<>
				<li onClick={ this.onToggleAdd }>Add project</li>
				{
					this.state.toggleAdd &&
					<AddProject />
				}
				<li onClick={ this.onDelete }>Delete all</li>
			</>
		);
	}
}

const mapDispatchToProps = {
	deleteAll: deleteProjects,
}

export default connect(null, mapDispatchToProps)(Menu);