import React, { Component, PropTypes } from 'react'
import TableRow from './TableRow.js'
import composeClassNames from './composeClassNames.js'

export default class Table extends Component {
	render () {

		const {
			style,
			headerRowStyle,
			className,
			rowClassName,
			headerRowClassName,
			data,
			children
		} = this.props

		const dataFields = children.map(child => child.props.dataField)
		const dataFormats = children.map(child => child.props.dataFormat)

		return (
			<table
				className={composeClassNames('simple-react-table', className)}
				style={style}
			>
				<thead>
					<tr
						className={composeClassNames('simple-react-rable__header-row', headerRowClassName)}
						style={headerRowStyle}
					>
						{ children }
					</tr>
				</thead>
				<tbody>
					{
						data.map( (d,i) => (
							<TableRow
								key={i}
								className={composeClassNames('simple-react-rable__row', rowClassName)}
								rowData={dataFields.map(field => data[i][field])}
								dataFormats={dataFormats}
							/>
						))
					}
				</tbody>
			</table>
		)
	}
}

Table.propTypes = {
	style: PropTypes.object,
	headerRowStyle: PropTypes.object,
	className: PropTypes.string,
	data: PropTypes.array.isRequired
}
