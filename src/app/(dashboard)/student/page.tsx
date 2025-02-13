import AnnouncementsComponent from "@/app/components/Announcements"
import CalendarComponent from "@/app/components/CalendarComponent"
import EventLisComponent from "@/app/components/EventLis"

const StudentPage = () => {
    return(
        <div className="p-4 flex gap-4 flex-col xl:flex-row overflow-hidden">
            {/*left */}
            <div className=" w-full xl:w-2/3">

            </div>
            {/*right */}
            <div className="w-full xl:w-1/3">
                <CalendarComponent/>
                <EventLisComponent />
                <AnnouncementsComponent/>
            </div>
        </div>
    )
}
export default StudentPage