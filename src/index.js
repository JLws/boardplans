import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/Project/App';
import reducer from './reducers';
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

const store = createStore( reducer );

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('objects')
);