import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shift Handover Management</h1>

        {/* Shift Handover Logs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Shift Handover Logs</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="text-left text-gray-600 uppercase tracking-wider">
                  <th className="px-4 py-2">Shift</th>
                  <th className="px-4 py-2">Production Levels</th>
                  <th className="px-4 py-2">Incidents</th>
                  <th className="px-4 py-2">Safety Checks</th>
                  <th className="px-4 py-2">Equipment Used</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border px-4 py-2">Day Shift</td>
                  <td className="border px-4 py-2">85%</td>
                  <td className="border px-4 py-2">None</td>
                  <td className="border px-4 py-2">Completed</td>
                  <td className="border px-4 py-2">Excavator, Drill</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Night Shift</td>
                  <td className="border px-4 py-2">78%</td>
                  <td className="border px-4 py-2">Minor equipment fault</td>
                  <td className="border px-4 py-2">Completed</td>
                  <td className="border px-4 py-2">Loader, Haul truck</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Shift Planning */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Shift Planning</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-2">Assign Team Members</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe, Jane Smith"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2">Set Production Targets</label>
                <input
                  type="number"
                  placeholder="e.g. 90%"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2">Notify Employees (Email or SMS)</label>
                <input
                  type="text"
                  placeholder="e.g. john@example.com, jane@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Save Shift Plan
              </button>
            </form>
          </div>
        </section>

        {/* Handover Summary */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Handover Summary</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Summary of tasks, performance, and concerns for the next shift..."
              rows="4"
            ></textarea>

            <button
              type="submit"
              className="mt-4 w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Submit Handover Summary
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
