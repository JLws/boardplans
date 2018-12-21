import React from 'react';
import ReactDOM from 'react-dom';
import Project from './project/prjitem';

import interact from 'interactjs';

interact('.project')
	.draggable({
		inertia: true,
		restrict: {
			restriction: "parent",
			endOnly: true,
			elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
		},
		autoScroll: true,
		onmove: dragMoveListener,
		onend: function ( event ) {
		}
	});

function dragMoveListener ( event ) {
	var target = event.target,
		x = ( parseFloat( target.getAttribute('data-x')) || 0 ) + event.dx,
		y = ( parseFloat( target.getAttribute('data-y')) || 0 ) + event.dy;

		target.style.webkitTransform = target.style.transform = 
			'translate(' + x + 'px, ' + y + 'px)';

		target.setAttribute('data-x', x);
		target.setAttribute('data-y', y);
}
window.dragMoveListener = dragMoveListener;

ReactDOM.render(<Project />, document.getElementsByClassName('objects')[0]);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA