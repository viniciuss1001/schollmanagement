import PaginationComponent from '@/app/components/Pagination'
import TableComponent from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import Image from 'next/image'
import React from 'react'

type Teacher = {
  id: number
  teacherId: string
  name: string 
  email?: string
  photo?: string
  phone: string
  subjects: string[]
  classes: string[]
  address: string
}


const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
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


const TeacherListPage = () => {

  const renderRow = (item: Teacher) => {
    
  }

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
            </button><button className='size-8 flex items-center justify-center rounded-full bg-background hover:bg-slate-200 animate-in'>
              <Image src='/sort.png' alt='filter' width={14} height={14} />
            </button>
            <button className='size-8 flex items-center justify-center rounded-full bg-background hover:bg-slate-200 animate-in'>
              <Image src='/plus.png' alt='filter' width={14} height={14} />
            </button>
          </div>
        </div>

      </div>
      {/* LIST */}
      <TableComponent colums={columns}/>
      {/* PAGINATION */}
        <PaginationComponent />
    </div>
  )
}

export default TeacherListPage