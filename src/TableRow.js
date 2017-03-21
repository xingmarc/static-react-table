import React, { Component, PropTypes } from 'react'

function td(data, key) {
	return <td key={key}>{data}</td>
}

export default class TableRow extends Component {
	render () {

		const {
			className,
			rowData,
			dataFormats
		} = this.props

		return (
			<tr className={className}>
				{ 
					rowData.map( (d, i) => {
						if (dataFormats[i]) {
							return td(dataFormats[i](d, rowData), i)
						} else {
							return td(d, i, rowData)
						}
					})
				}
			</tr>
		)
	}
}

TableRow.propTypes = {
	rowData: PropTypes.array.isRequired,
	dataFormats: PropTypes.array
}
