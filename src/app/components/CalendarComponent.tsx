"use client"
import React from 'react'
import { Calendar } from '@/components/ui/calendar'

const CalendarComponent = () => {

    const [date, setDate] = React.useState<Date | undefined> (new Date())

  return (
    <div className='w-full flex items-center justify-center p-2'>
        <Calendar 
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border-none shadow '
        />
    </div>
  )
}

export default CalendarComponent