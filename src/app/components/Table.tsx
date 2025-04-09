type ColumsProps = {
	colums: {
		header: string
		accessor: string
		className?: string
	}[]
}

const TableComponent = ({ colums }: ColumsProps) => {
	return (
		<table className="w-full mt-4">
			<thead>
				<tr className=" text-left text-gray-500 text-sm">
					{colums.map((col, index) =>(
						<th key={col.accessor}>
							{col.header}
						</th>
					))}
				</tr>
			</thead>
		</table>
	)
}

export default TableComponent