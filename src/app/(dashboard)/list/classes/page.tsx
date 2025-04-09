import PaginationComponent from '@/app/components/Pagination'
import TableComponent from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import { classesData, userRole } from '@/app/utils/data'
import Image from 'next/image'

type Class = {
	id: number
	name: string
	capacity: number
	grade: number
	supervisor: string
}


const columns = [
	{
	  header: "Class Name",
	  accessor: "name",
	},
	{
	  header: "Capacity",
	  accessor: "capacity",
	  className: "hidden md:table-cell",
	},
	{
	  header: "Grade",
	  accessor: "grade",
	  className: "hidden md:table-cell",
	},
	{
	  header: "Supervisor",
	  accessor: "supervisor",
	  className: "hidden md:table-cell",
	},
	{
	  header: "Actions",
	  accessor: "action",
	},
 ];

const SubjectListPage = () => {

	const renderRow = (item: Class) => (
		<tr key={item.id} className='border-b border-gray-200 even:bg-slate-50/90 hover:bg-slate-100'>
			<td className='flex items-center gap-4 p-4'>
				{item.name}
			</td>
			<td className='hidden md:table-cell'>
				{item.capacity}
			</td>
			<td className='hidden md:table-cell'>
				{item.grade}
			</td>
			<td className='hidden md:table-cell'>
				{item.supervisor}
			</td>
			<td>
				<div className='flex items-center gap-2'>
					
					{userRole === 'admin'
					}
				</div>
			</td>
		</tr>
	)

	return (
		<div
			className='bg-white p-4 rounded-md flex-1 m-4 mt-0'
		>
			{/* TOP */}
			<div className='flex items-center justify-between'>
				<h1 className='hidden md:block text-lg from-transparent'>Todos as Salas</h1>
				<div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
					<TableSearch />
					<div className='flex items-center gap-4 self-end'>
						<button className='size-8 flex items-center justify-center rounded-full bg-background hover:bg-slate-200 animate-in'>
							<Image src='/filter.png' alt='filter' width={14} height={14} />
						</button>
						<button className='size-8 flex items-center justify-center rounded-full bg-background hover:bg-slate-200 animate-in'>
							<Image src='/sort.png' alt='filter' width={14} height={14} />
						</button>
						<button className='size-8 flex items-center justify-center rounded-full bg-background hover:bg-slate-200 animate-in'>
							<Image src='/plus.png' alt='filter' width={14} height={14} />
						</button>
					</div>
				</div>

			</div>
			{/* LIST */}
			<TableComponent colums={columns} renderRow={renderRow} data={classesData} />
			{/* PAGINATION */}
			<PaginationComponent />
		</div>
	)
}

export default SubjectListPage