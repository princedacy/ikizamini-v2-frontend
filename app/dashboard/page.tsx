import AuthGuard from "../components/AuthGuard";

export default function DashboardPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md p-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Ikizamini</h1>

          <nav className="space-y-2">
            <button className="w-full text-left p-3 bg-blue-100 text-blue-600 rounded-lg font-medium">
              Dashboard
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded-lg text-gray-600">
              Profile Management
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded-lg text-gray-600">
              User Management
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded-lg text-gray-600">
              Prepare Exam
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded-lg text-gray-600">
              Submissions & Insights
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Dashboard</h2>

            {/* Real Estate Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-gray-500 text-sm mb-2">Total Users</h3>
                <p className="text-2xl font-bold text-gray-800">245</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-gray-500 text-sm mb-2">Active Exams</h3>
                <p className="text-2xl font-bold text-gray-800">1,234</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-gray-500 text-sm mb-2">Submissions</h3>
                <p className="text-2xl font-bold text-gray-800">78%</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-gray-500 text-sm mb-2">Pass Rate</h3>
                <p className="text-2xl font-bold text-gray-800">78%</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-100">
                  <p className="font-medium text-gray-800">
                    New exam created: Mathematics Final
                  </p>
                  <p className="text-sm text-gray-500 mt-1">2 hours ago</p>
                </div>
                <div className="pb-4 border-b border-gray-100">
                  <p className="font-medium text-gray-800">
                    User role updated: Sarah Johnson
                  </p>
                  <p className="text-sm text-gray-500 mt-1">5 hours ago</p>
                </div>
                <div className="pb-4">
                  <p className="font-medium text-gray-800">
                    New submission: Physics Quiz
                  </p>
                  <p className="text-sm text-gray-500 mt-1">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
