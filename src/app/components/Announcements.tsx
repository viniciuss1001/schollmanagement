
import React from 'react'
import { AnnouncementsDataExample as announcements } from '../utils/ExampleDatas'
const AnnouncementsComponent = () => {
  return (
    <div className='p-4 rounded-md shadow-sm border mt-4'>
        <div className='flex items-center justify-between'>
            <h2>Anúncios e Notificações</h2>
            <span className='text-xs text-gray-400'>Mostrar tudo</span>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 mt-3'>
        {announcements.map((announcement) => (
            <div key={announcement.id} className='p-4 w-full border rounded-md shadow-md'>
                <h3 className='font-semibold ligth:text-gray-800 dark:text-white'>{announcement.title}</h3>
                <p className='text-gray-600 text-sm dark:text-gray-300'>{announcement.description}</p>
            </div>
        ))}
        </div>

    </div>
  )
}

export default AnnouncementsComponent