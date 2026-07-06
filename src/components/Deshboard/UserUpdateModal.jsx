import { useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";

const UserUpdateModal = () => {
  const { data } = useSession();
  const user = data?.user;
  const [isOpen, setIsOpen] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("pending");
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="w-full py-6 font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg cursor-pointer"
      >
        Book Appointment
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 w-full max-w-md text-gray-800 shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Book Appointment</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-red-600 cursor-pointer text-xl"
              >
                ✕
              </button>
            </div>

            {/* Doctor Info */}
            <div className="flex items-center justify-center flex-col mt-2 mb-6">
              <img
                className="w-20 h-20 rounded-full object-cover shadow-sm mb-2"
                src={docPhoto}
                alt={doctorName}
              />
              <p className="text-center text-xl font-bold text-gray-900">
                {doctorName}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Doctor Name */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-600">
                  Doctor Name
                </label>
                <input
                  type="text"
                  value={doctorName}
                  readOnly
                  className="w-full bg-gray-50 border border-slate-200 rounded-xl p-3 text-gray-500 focus:outline-none cursor-not-allowed"
                />
              </div>

              {/* Patient Name */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Patient Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Patient Name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  required
                  className="w-full border text-black border-slate-300 rounded-xl p-3 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Select Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border border-slate-300 rounded-xl p-3 text-black focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Select Time
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="w-full border border-slate-300 rounded-xl p-3 text-black focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 rounded-xl border cursor-pointer border-slate-300 text-gray-700 hover:bg-gray-100 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 rounded-xl text-white cursor-pointer bg-blue-600 hover:bg-blue-700 font-bold disabled:opacity-50 transition-colors shadow-sm"
                >
                  {loading ? "Booking..." : "Confirm"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserUpdateModal;
