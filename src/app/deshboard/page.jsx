import DeshboardTable from "@/components/Desboard/DeshboardTable";
import { Button, Table, Tabs } from "@heroui/react";

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
            <DeshboardTable></DeshboardTable>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default deshboard;
