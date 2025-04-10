import AnnouncementsComponent from "@/app/components/Announcements"
import AreaChartFinance from "@/app/components/AreaChartFinance"
import BarCharts from "@/app/components/BarChart"
import CalendarComponent from "@/app/components/CalendarComponent"
import CountChart from "@/app/components/CountChart"
import EventListComponent from "@/app/components/EventList"

import UserCard from "@/app/components/UserCard"



const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row ">
            {/*left */}
            <div className="w-full lg:w-2/3">
                <div className="flex gap-2 justify-between flex-wrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>
                {/* middle charts*/}
                <div className="flex gap-4 flex-col lg:flex-row mt-4">
                    <div className=" w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <BarCharts />
                    </div>
                </div>
                {/**big chart */}
                <div className="w-full h-[500px] p-2">
                    <AreaChartFinance />
                </div>
            </div>
            {/*right */}
            <div className="w-full lg:w-1/3">
                <CalendarComponent />
                <EventListComponent />
                <AnnouncementsComponent />
            </div>
        </div>
    )
}
export default AdminPage