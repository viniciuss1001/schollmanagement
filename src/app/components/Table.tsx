import React from "react"

type ColumsProps = {
	colums: {
		header: string
		accessor: string
		className?: string
	}[]
	renderRow: (item: any) => React.ReactNode
	data: any[]
}

const TableComponent = ({ colums, renderRow, data }: ColumsProps) => {
	return (
		<table className="w-full mt-4">
			<thead>
				<tr className=" text-left text-gray-500 text-sm">
					{colums.map((col, index) =>(
						<th key={col.accessor} className={col.className}>
							{col.header}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
					{data.map((item) => renderRow((item)))}
			</tbody>
		</table>
	)
}

export default TableComponent