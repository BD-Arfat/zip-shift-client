import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <div className="p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-2">Welcome Back 👋</h2>
                    <p className="text-gray-500 mb-8">
                        Please login to your account
                    </p>

                    <form className="space-y-5">
                        <div>
                            <label className="block mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D8F47A]"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D8F47A]"
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-[#D8F47A]" />
                                Remember me
                            </label>
                            <a href="#" className="text-[#D8F47A] font-medium">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#D8F47A] py-3 rounded-lg font-semibold hover:opacity-90 transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
        </div>
    );
};

export default LoginPage;