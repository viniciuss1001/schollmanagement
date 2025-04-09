import PaginationComponent from '@/app/components/Pagination'
import TableComponent from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import { examsData, resultsData, teachersData, userRole } from '@/app/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Result = {
  id: number
  subject: string
  class: string
  teacher: string
  student: string
  type: "exam" | "assignment"
  date: string
  score: number
}


const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Student",
    accessor: "student",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ResultListPage = () => {

  const renderRow = (item: Result) => (
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50/90 hover:bg-slate-100'>
      <td className='flex items-center gap-4 p-4'>
        {item.subject}
      </td>
      <td>
        {item.student}
      </td>
      <td className='hidden md:table-cell'>
        {item.score}
      </td>
      <td className='hidden md:table-cell'>
        {item.teacher}
      </td>
      <td className='hidden md:table-cell'>
        {item.class}
      </td>
      <td className='hidden md:table-cell'>
        {item.date}
      </td>

      <td>
        <div className='flex items-center gap-2'>
          {userRole === 'admin' && <button className='size-7 flex items-center justify-center rounded-full bg-transparent hover:bg-red-200'>
            <Image src='/delete.png' alt='' width={16} height={16} />
          </button>}
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
        <h1 className='hidden md:block text-lg from-transparent'>Todos os Professores</h1>
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
      <TableComponent colums={columns} renderRow={renderRow} data={resultsData} />
      {/* PAGINATION */}
      <PaginationComponent />
    </div>
  )
}

export default ResultListPage