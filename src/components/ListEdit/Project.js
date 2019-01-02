import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCategory } from '../../actions';
import Category from './Category';

class Project extends Component {
	render() {
		const { name, onClick, isChild, childs, id } = this.props;
		let input;
		return (
			<li>
				<span onClick = { onClick }>{name}</span>
				{ isChild &&
					<>
						<div className="container">
							<form onSubmit={ e => {
								e.preventDefault();
								if ( !input.value.trim() ) {
									return;
								}
								this.props.dispatch( addCategory(id, input.value) );
								input.value = '';
							}}>
								<input ref={node => input = node} />
								<button type="submit">Add</button>
							</form>
						</div>
						<div>
							{
								childs.map ( (child, i) =>
									<Category key={i} name={child} />
								)
							}
						</div>
					</>
				}
			</li>
		);
	}
}

Project.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	isChild: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired,
	childs: PropTypes.array.isRequired
};

export default connect()(Project);