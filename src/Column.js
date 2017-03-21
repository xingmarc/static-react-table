import React, { Component, PropTypes } from 'react'

export default class Column extends Component {
	render () {
		const {
			className,
			header,
			dataField
		} = this.props

		return (
			<th className={className}>
				{ header ? header : dataField }
			</th>
		)
	}
}

Column.propTypes = {
	className: PropTypes.string,
	header: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object
	]),
	dataField: PropTypes.string.isRequired,
	dataFormat: PropTypes.func
}
