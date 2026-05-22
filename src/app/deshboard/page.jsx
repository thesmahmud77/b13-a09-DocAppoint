import { Button, Tabs } from "@heroui/react";

const deshboard = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">My Bookings</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          nam fuga vitae ab illum porro
        </p>
      </div>
      <div>
        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold">Well Come to our hospital</h1>
          <p>Please check your appoints</p>
        </div>
        <div>
          <div className="flex items-center justify-between mt-10">
            <h1 className="text-3xl font-bold">Today Appointments</h1>
            <Button variant="outline">View All</Button>
          </div>
          {/* Table Start */}
          <div className="mt-10">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                  #
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" px-10 flex items-center justify-between space-x-50 wrap-normal text-center text-nowrap">
                <td>1</td>
                <td>Zemlak Daniel</td>
                <td>Id Exectutive</td>
                <td>Blue</td>
                <td>
                  <div>
                    <button>Delete</button>
                    <button>Update</button>
                  </div>
                </td>
              </tr>
              <div className="divider"></div>
            </tbody>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default deshboard;
