import BarCharts from "@/app/components/BarChart"
import CountCharts from "@/app/components/BarChart"
import UserCard from "@/app/components/UserCard"

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/*left */}
            <div className="w-full lg:w-2/3">
                <div className="flex gap-2 justify-between flex-wrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>
                <BarCharts />
            </div>
            {/*right */}
            <div className="w-full lg:w-1/3">
                r
            </div>
        </div>
    )
}
export default AdminPage