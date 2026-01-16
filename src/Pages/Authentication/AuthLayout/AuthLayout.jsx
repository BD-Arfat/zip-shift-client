import React from 'react';
import image from '../../../assets/authImage.png';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className="min-h-screen  flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-5xl rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* Left Side Form */}
                <Outlet></Outlet>

                {/* Right Side Image */}
                <div className="hidden md:block">
                    <img
                        src={image}
                        alt="Login"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </div>
    );
};

export default AuthLayout;