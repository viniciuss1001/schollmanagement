import PaginationComponent from '@/app/components/Pagination'
import TableComponent from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import { parentsData, userRole } from '@/app/utils/data'
import Image from 'next/image'
import Link from 'next/link'

type Parent = {
	id: number
	name: string
	email?: string
	students: string[]
	phone: string
	address: string
}


const columns = [
	{
	  header: "Info",
	  accessor: "info",
	},
	{
	  header: "Student Names",
	  accessor: "students",
	  className: "hidden md:table-cell",
	},
	{
	  header: "Phone",
	  accessor: "phone",
	  className: "hidden lg:table-cell",
	},
	{
	  header: "Address",
	  accessor: "address",
	  className: "hidden lg:table-cell",
	},
	{
	  header: "Actions",
	  accessor: "action",
	},
 ];

const ParentListPage = () => {

	const renderRow = (item: Parent) => (
		<tr key={item.id} className='border-b border-gray-200 even:bg-slate-50/90 hover:bg-slate-100'>
			<td className='flex items-center gap-4 p-4'>
				<div className='flex flex-col'>
					<h3 className='font-semibold'>
						{item.name}
					</h3>
					<p className='text-xs text-muted-foreground'>
						{item?.email}
					</p>
				</div>
			</td>
			<td className='hidden md:table-cell'>
				{item.students.join(',')}
			</td>
			<td className='hidden md:table-cell'>
				{item.phone}
			</td>
			<td className='hidden md:table-cell'>
				{item.address}
			</td>
			<td>
				<div className='flex items-center gap-2'>
					<Link href={`/list/teachers/${item.id}`}>
						<button className='size-7 flex items-center justify-center rounded-full bg-transparent hover:bg-slate-100'>
							<Image src='/view.png' alt='' width={16} height={16} />
						</button>
					</Link>
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
				<h1 className='hidden md:block text-lg from-transparent'>Todos os Estudantes</h1>
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
			<TableComponent colums={columns} renderRow={renderRow} data={parentsData} />
			{/* PAGINATION */}
			<PaginationComponent />
		</div>
	)
}

export default ParentListPage