"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const [loading, setLoading] = useState(false);
  const { data, isPending } = useSession();
  const user = data?.user;
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (formValues) => {
    try {
      setLoading(true);

      const imgFile = formValues.photo?.[0];
      let photoURL = user?.image || "";

      if (imgFile) {
        const imageFormData = new FormData();
        imageFormData.append("image", imgFile);

        const imgbbRes = await fetch(
          `https://api.imgbb.com/1/upload?key=d11b800a59dcca4d8f9ddb86c014f5f7`,
          {
            method: "POST",
            body: imageFormData,
          },
        );
        const imgbbData = await imgbbRes.json();
        photoURL = imgbbData?.data?.url || photoURL;
      }

      const res = await fetch(
        `http://localhost:8080/update-user?email=${encodeURIComponent(user?.email)}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formValues.name || user?.name,
            photo: photoURL,
          }),
        },
      );

      const result = await res.json();
      console.log(result);

      if (res.ok && result?.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Profile Updated",
          text: "Your information has been updated successfully.",
          timer: 2000,
          showConfirmButton: false,
        });

        router.push("/user");
        router.refresh();
      } else {
        Swal.fire({
          icon: "warning",
          title: "No Changes Made",
          text: "There was no new information to update.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Something went wrong while updating your profile.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-gray-500">Loading....</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Update Your profile
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Update Your Name and Image
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              defaultValue={user?.email || ""}
              readOnly
              {...register("email")}
              className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-gray-100 px-3 py-2.5 text-sm text-gray-500 focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Update Your Name
            </label>
            <input
              placeholder={user?.name || "Write your name"}
              {...register("name")}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Update Your Photo
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("photo", { required: true })}
              className="w-full py-3 cursor-pointer rounded-lg border border-gray-300 p-2 text-sm text-gray-600 file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-amber-600 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-white hover:file:bg-amber-700"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-lg bg-blue-500 py-3 font-semibold text-white transition-colors hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Loading..." : "Update User Info"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
