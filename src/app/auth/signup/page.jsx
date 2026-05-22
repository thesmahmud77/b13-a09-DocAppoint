"use client";
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
import { HiLockClosed, HiMail, HiUser } from "react-icons/hi";
import { PiHospitalFill } from "react-icons/pi";
import Swal from "sweetalert2";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const userdata = Object.fromEntries(fromData.entries());
    // console.log("Form Submited With", data);

    const { data, error } = await authClient.signUp.email({
      name: userdata.name,
      email: userdata.email,
      password: userdata.password,
      callbackURL: "/",
    });
    // console.log(data);
    if (data) {
      Swal.fire({
        title: "Register Completed",
        icon: "success",
        draggable: true,
      });
    }
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 shadow-[0_8px_24px_rgba(59,130,246,0.4)] mb-5">
            <PiHospitalFill className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
            Create your account
          </h1>
          <p className="text-slate-500 text-sm mt-2 leading-relaxed">
            Join thousands of patients managing their health smarter. It's free
            to get started.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_4px_32px_rgba(0,0,0,0.08)] border border-slate-100 p-8">
          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
              className="flex flex-col gap-1.5"
            >
              <Label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                <HiUser className="text-blue-500 text-base" />
                Full Name
              </Label>
              <Input
                name="name"
                placeholder="John Doe"
                className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200"
              />
              <FieldError className="text-xs text-red-500 font-medium mt-0.5" />
            </TextField>

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
              type="password"
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
              <Input
                name="password"
                placeholder="Create a strong password"
                className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200"
              />
              <Description className="text-xs text-slate-400 mt-0.5">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError className="text-xs text-red-500 font-medium mt-0.5" />
            </TextField>

            <label className="flex items-start gap-2.5 mt-1 cursor-pointer">
              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-0.5 rounded border-slate-300 accent-blue-600 cursor-pointer flex-shrink-0"
              />
              <span className="text-sm text-slate-500 leading-relaxed">
                I agree to the
                <Link
                  href="//auth/signup"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Terms of Service
                </Link>
                and
                <Link
                  href="//auth/signup"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>

            <Button
              type="submit"
              className="mt-2 w-full h-11 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(59,130,246,0.4)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.5)] transition-all duration-300"
            >
              <Check />
              Create Account
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
                Already have an account?
              </span>
            </div>
          </div>

          <Link
            href="/auth/signin"
            className="block w-full h-11 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50/50 text-blue-600 font-semibold text-sm flex items-center justify-center transition-all duration-200"
          >
            Sign in instead
          </Link>
        </div>

        <div className="mt-6 mx-auto max-w-sm bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 flex items-start gap-3">
          <span className="text-blue-500 text-lg mt-0.5 flex-shrink-0">🔒</span>
          <p className="text-xs text-slate-500 leading-relaxed">
            Your data is encrypted and never shared with third parties. We take
            your privacy seriously.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
