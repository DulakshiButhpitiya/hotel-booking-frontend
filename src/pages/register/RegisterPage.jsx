import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        wPhone: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    async function handleRegister() {
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const res = await axios.post("http://localhost:5000/api/users/", {
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                wPhone: formData.wPhone, // Matches schema
                password: formData.password,
            });

            setSuccessMessage(res.data.message);
            setError("");
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "Registration failed");
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="w-[400px] p-6 bg-gray-800 shadow-lg rounded-lg text-white">
                <h1 className="text-2xl font-bold text-center mb-4">Register</h1>

                {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
                {successMessage && <p className="text-green-400 text-sm mb-3">{successMessage}</p>}

                <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="w-full p-2 mb-3 bg-gray-700 border border-gray-600 rounded"
                    value={formData.firstname}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="w-full p-2 mb-3 bg-gray-700 border border-gray-600 rounded"
                    value={formData.lastname}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 mb-3 bg-gray-700 border border-gray-600 rounded"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="wPhone"
                    placeholder="Phone Number"
                    className="w-full p-2 mb-3 bg-gray-700 border border-gray-600 rounded"
                    value={formData.wPhone}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-2 mb-3 bg-gray-700 border border-gray-600 rounded"
                    value={formData.password}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full p-2 mb-3 bg-gray-700 border border-gray-600 rounded"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />

                <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
                    onClick={handleRegister}
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default RegisterPage;
