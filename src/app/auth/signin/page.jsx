"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { HiLockClosed, HiMail, HiEye, HiEyeOff } from "react-icons/hi";
import { PiHospitalFill } from "react-icons/pi";
import Swal from "sweetalert2";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loding, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const userdata = Object.fromEntries(fromData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userdata.email,
      password: userdata.password,
      rememberMe: true,
      callbackURL: "/",
    });

    setLoading(true);

    if (data) {
      setLoading(false);
      await Swal.fire({
        title: "Login Successful",
        icon: "success",
        draggable: true,
        timer: 1500,
        showConfirmButton: false,
      });

      router.push("/");
    }

    if (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Something went wrong!",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 shadow-[0_8px_24px_rgba(59,130,246,0.4)] mb-5">
            <PiHospitalFill className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
            Welcome back
          </h1>
          <p className="text-slate-500 text-sm mt-2 leading-relaxed">
            Sign in to manage your appointments and access your health
            dashboard.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_4px_32px_rgba(0,0,0,0.08)] border border-slate-100 p-8">
          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
              className="flex flex-col gap-1.5"
            >
              <Label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                <HiMail className="text-blue-500 text-base" />
                Email Address
              </Label>
              <Input
                name="email"
                placeholder="john@example.com"
                className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200"
              />
              <FieldError className="text-xs text-red-500 font-medium mt-0.5" />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type={showPassword ? "text" : "password"}
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
              className="flex flex-col gap-1.5"
            >
              <Label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                <HiLockClosed className="text-blue-500 text-base" />
                Password
              </Label>
              <div className="relative">
                <Input
                  name="password"
                  placeholder="Enter your password"
                  className="w-full h-11 px-4 pr-11 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <HiEyeOff className="text-lg" />
                  ) : (
                    <HiEye className="text-lg" />
                  )}
                </button>
              </div>
              <Description className="text-xs text-slate-400 mt-0.5">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError className="text-xs text-red-500 font-medium mt-0.5" />
            </TextField>

            <div className="flex items-center justify-between mt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 accent-blue-600 cursor-pointer"
                />
                <span className="text-sm text-slate-500">Remember me</span>
              </label>
              <Link
                href="/auth/signin"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="mt-2 w-full h-11 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(59,130,246,0.4)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.5)] transition-all duration-300"
            >
              {loding ? "Submiting" : "Signup"}
            </Button>

            <Button
              type="reset"
              className="w-full h-11 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold text-sm transition-all duration-200 border border-slate-200"
            >
              Reset
            </Button>
          </Form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs text-slate-400 font-medium">
                Don't have an account?
              </span>
            </div>
          </div>

          <Link
            href="/auth/signup"
            className="block w-full h-11 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50/50 text-blue-600 font-semibold text-sm flex items-center justify-center transition-all duration-200"
          >
            Create a free account
          </Link>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6 leading-relaxed">
          By signing in, you agree to our{" "}
          <Link
            href="/auth/signin"
            className="text-blue-500 hover:underline font-medium"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/auth/signin"
            className="text-blue-500 hover:underline font-medium"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
