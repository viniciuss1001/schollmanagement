"use client"
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '../utils/data'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'

const localizer = momentLocalizer(moment)

const BigCalendarComponent = () => {

	const [view, setView] = useState<View>(Views.WORK_WEEK)
	const handleChangeView = (selectedView: View) => {
		setView(selectedView)
	}

	return (
		<div>
			<Calendar
				localizer={localizer}
				events={calendarEvents}
				startAccessor="start"
				endAccessor="end"
				views={['work_week', 'day']}
				view={view}
				onView={handleChangeView}
				style={{ height: 500, background: 'transparent' }}
			/>
		</div>
	)
}
export default BigCalendarComponent