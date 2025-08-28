"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signUpButtonDisable, setSignUpButtonDisable] = useState(false);
  const router = useRouter();
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { type, value } = e.target;
    if (type === "email") setEmail(value);
    if (type === "password") setPassword(value);
  };
  const handleSubmit = async () => {
    setSignUpButtonDisable(true);
    const res = await axios.post("/api/log-in", {
      email,
      password,
    });
    if (res.data.success) router.push("/");
      setSignUpButtonDisable(false);
      setErrorMsg(res.data.message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 space-y-6">
          {/* Lock Icon */}
          <div className="flex justify-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-50 rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-500" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              Welcome Back
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              Log in to your account to continue
            </p>
          </div>

          {/* Login Form */}
          <div className="space-y-4 sm:space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full pl-9 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  ) : (
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  )}
                </button>
              </div>
            </div>
            <div className="text-red-700 text-center">
              {errorMsg ? errorMsg : ""}
            </div>
            {/* Sign In Button */}
            <button
              onClick={handleSubmit}
              disabled={signUpButtonDisable}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 sm:py-3 px-4 text-sm sm:text-base rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none transform active:scale-95"
            >
              {signUpButtonDisable ? "Processing..." : "Log In"}
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-600">
              Don`t have an account?{" "}
              <Link href="/sign-up">
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Sign up here
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
