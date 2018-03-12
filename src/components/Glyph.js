const React = require('react');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');
var blacklist = require('blacklist');

const icons = require('../Octicons').Octicon.map;
const validNames = require('../Octicons').Octicon.keys;

const Glyph = createReactClass({
	displayName: 'Glyph',
	propTypes: {
		className: PropTypes.string,
		icon: PropTypes.oneOf(validNames),
		type: PropTypes.oneOf([
			'danger',
			'default',
			'muted',
			'primary',
			'success',
			'warning',
		]),
	},
	render () {
		// classes
		const className = classNames(
			'Glyph__icon',
			icons[this.props.icon].className,
			(this.props.type ? 'IconField__icon-color--' + this.props.type : null),
			this.props.className
		);
		var props = blacklist(this.props, 'className', 'icon', 'type');
		props.className = className;
		return React.createElement('i', props);
	},
});

Glyph.names = validNames;

export default Glyph;
