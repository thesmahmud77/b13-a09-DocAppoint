import DeshboardSidebar from "@/components/Deshboard/DeshboardSidebar";

const DeshboardLayout = ({ children }) => {
  return (
    <div className="flex items-start justify-between min-h-screen w-full max-w-7xl mx-auto gap-10 bg-gray-50/50">
      <div className="flex flex-col gap-5 px-6 py-8 items-center justify-start border-r border-gray-100">
        <DeshboardSidebar></DeshboardSidebar>
      </div>
      <main className="w-full flex items-start justify-center">{children}</main>
    </div>
  );
};

export default DeshboardLayout;
