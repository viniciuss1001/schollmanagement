import AnnouncementsComponent from "@/app/components/Announcements"
import BigCalendarComponent from "@/app/components/BigCalendar"
import CalendarComponent from "@/app/components/CalendarComponent"
import EventListComponent from "@/app/components/EventList"

const StudentPage = () => {
    return(
        <div className="p-4 flex gap-4 flex-col xl:flex-row overflow-hidden">
            {/*left */}
            <div className=" w-full xl:w-2/3">
                <div className="h-full bg-background p-4 rounded-sm">
                    <h1 className="text-xl font-semibold">Calendário de Atividades</h1>
                    <BigCalendarComponent />
                </div>
            </div>
            {/*right */}
            <div className="w-full xl:w-1/3">
                <CalendarComponent/>
                <EventListComponent />
                <AnnouncementsComponent/>
            </div>
        </div>
    )
}
export default StudentPage