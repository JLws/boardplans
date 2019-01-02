import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ name }) => (
	<div className="category">
		{name}
	</div>
);

Category.propTypes = {
	name: PropTypes.string.isRequired
};

export default Category;