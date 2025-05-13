interface DashboardProps {
  setIsAuthenticated: (value: boolean) => void;
}
interface DetailCardProps {
  label: string;
  value: string;
  color: string;
}
const Dashboard = ({ setIsAuthenticated }: DashboardProps) => {
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const userDetails = {
    name: "Nauman Tanwir",
    studentId: "500237447",
    courseName: "Azure Architect Technologies",
    courseId: "CLOD 2005",
    instructor: "Prof. Sergio Loza",
    github: "https://github.com/ntanwir10/auth-app-gcp",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl w-full mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Student Details
              </h2>
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-[#EA4335] text-white rounded-lg hover:bg-[#D33828] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#EA4335] focus:ring-offset-2"
              >
                Logout
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DetailCard
                label="Name"
                value={userDetails.name}
                color="bg-[#4285F4]"
              />
              <DetailCard
                label="Student ID"
                value={userDetails.studentId}
                color="bg-[#EA4335]"
              />
              <DetailCard
                label="Course Name"
                value={userDetails.courseName}
                color="bg-[#FBBC05]"
              />
              <DetailCard
                label="Course ID"
                value={userDetails.courseId}
                color="bg-[#34A853]"
              />
              <DetailCard
                label="Instructor"
                value={userDetails.instructor}
                color="bg-[#747DEF]"
              />
              <DetailCard
                label="Github"
                value={userDetails.github}
                color="bg-[#000000]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailCard = ({ label, value, color }: DetailCardProps) => (
  <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className={`w-12 h-1 ${color} rounded-full mb-3`}></div>
    <p className="text-gray-500 text-sm mb-1">{label}</p>
    <p className="text-gray-900 text-lg font-semibold">{value}</p>
  </div>
);

export default Dashboard;
