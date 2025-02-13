
import React from 'react'
import { EventsDataExample as events } from "@/app/utils/ExampleDatas"
import Image from "next/image"

const EventLisComponent = () => {
  return (
    <div> <div className="flex flex-col gap-4 p-4 border shadow-sm rounded-md">
    <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Eventos</h3>
        <Image src='/moreDark.png' height={20} width={20} alt="Mais" /></div>
    {events.map((event) => (
        <div
            className="p-5 rounded-md border shadow-sm odd:border-t-blue-400 even:border-t-slate-600"
            key={event.id}>
            <div className="flex items-center justify-between">
                <h1 className="text-md ">{event.title}</h1>
                <span className="text-sm text-gray-500 font-semibold dark:texgra">{event.time}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{event.description}</p>
        </div>
    ))}
</div></div>
  )
}

export default EventLisComponent