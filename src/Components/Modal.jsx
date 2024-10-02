import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Modal = ({ handleCloseModal, modalContent, showModal }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password1: '',
    });

    useEffect(() => {
        setFormData(modalContent || {});
    }, [modalContent]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSave = (e) => {
        e.preventDefault();
        // Handle form submission, perhaps via API or other logic
        console.log("Form Data: ", formData);
    };

    const handleClose = () => {
        handleCloseModal();
    };

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    id="static-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden bg-opacity-50 bg-gray-900"
                >
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-3xl border-[#FF6B66] border">
                            <div className="flex justify-center my-6">
                                <form className="bg-white" onSubmit={handleSave}>
                                    <div className="mb-4 flex flex-col items-center">
                                        <div className="flex gap-3">
                                            <div className="">
                                                <label className="block text-md font-bold mb-2" htmlFor="first_name">
                                                    First Name
                                                </label>
                                                <input
                                                    className="rounded-md w-full py-3 px-3 focus:outline-none bg-[#E6E0E9]"
                                                    name="first_name"
                                                    type="text"
                                                    value={formData.first_name}
                                                    onChange={handleChange}
                                                    placeholder="First Name"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-md font-bold mb-2" htmlFor="last_name">
                                                    Last Name
                                                </label>
                                                <input
                                                    className="rounded-md w-full py-3 px-3 focus:outline-none bg-[#E6E0E9]"
                                                    name="last_name"
                                                    type="text"
                                                    value={formData.last_name}
                                                    onChange={handleChange}
                                                    placeholder="Last Name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-md font-bold mb-2" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className="rounded-md w-full py-3 px-3 focus:outline-none bg-[#E6E0E9]"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email"
                                            required
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-bold mb-2" htmlFor="password1">
                                            Password
                                        </label>
                                        <input
                                            className="rounded-md w-full py-3 px-3 focus:outline-none bg-[#E6E0E9]"
                                            name="password1"
                                            type="password"
                                            value={formData.password1}
                                            onChange={handleChange}
                                            placeholder="******************"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-[#DF73FF] hover:bg-gray-900 w-full text-white font-thin py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                                    >
                                        Join
                                    </button>
                                </form>
                            </div>
                            <div className="flex items-center p-4 md:p-5">
                                <button
                                    onClick={handleClose}
                                    type="button"
                                    className="text-white ml-auto focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center bg-[#FF6B66]"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
