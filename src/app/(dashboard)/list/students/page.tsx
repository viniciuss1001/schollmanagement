import PaginationComponent from '@/app/components/Pagination'
import TableComponent from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import { studentsData, userRole } from '@/app/utils/data'
import Image from 'next/image'
import Link from 'next/link'

type Student = {
	id: number
	studentId: string
	name: string
	email?: string
	photo?: string
	phone: string
	grade: number
	class: string
	address: string
}


const columns = [
	{
		header: "Info",
		accessor: "info",
	},
	{
		header: "Student ID",
		accessor: "studentId",
		className: "hidden md:table-cell",
	},
	{
		header: "Grade",
		accessor: "grade",
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


const StudentListPage = () => {

	const renderRow = (item: Student) => (
		<tr key={item.id} className='border-b border-gray-200 even:bg-slate-50/90 hover:bg-slate-100'>
			<td className='flex items-center gap-4 p-4'>
				<Image src={item.photo ?? ''} alt='' width={40} height={40} className='md:hidden xl:block size-10 rounded-full object-cover' />
				<div className='flex flex-col'>
					<h3 className='font-semibold'>
						{item.name}
					</h3>
					<p className='text-xs text-muted-foreground'>
						{item?.class}
					</p>
				</div>
			</td>
			<td className='hidden md:table-cell'>
				{item.studentId}
			</td>
			<td className='hidden md:table-cell'>
				{item.grade}
			</td>
			<td className='hidden md:table-cell'>
				{item.class}
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
			<TableComponent colums={columns} renderRow={renderRow} data={studentsData} />
			{/* PAGINATION */}
			<PaginationComponent />
		</div>
	)
}

export default StudentListPage