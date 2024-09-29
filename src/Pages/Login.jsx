import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../Context/MyContext";
import axiosInstance from "../axios/axios";
import axios from "axios";


const Login = () => {
    const {setLogin} = useContext(MyContext)
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = new FormData();
        postData.append("email", formData.email);
        postData.append("password", formData.password);

        try {
            console.log(postData);
            const res = await axios.post(`http://127.0.0.1:8000/user/login/`, postData);
            localStorage.setItem("access_token", res.data.access);
            localStorage.setItem("refresh_token", res.data.refresh);
            navigate("/");
            setLogin(true)  
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div className="grid grid-cols-5 ">
                <div className="col-span-3 my-20 ms-40">
                    <div className="ms-10" style={{ width: '60vw', height: '60vh', overflow: 'hidden' }}>
                        <video
                            style={{ width: '60%', height: '100%', objectFit: 'cover' }}
                            loop
                            muted
                            autoPlay
                        >
                            {/* <source src={signin1} type="video/mp4" /> */}
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="col-span-2 m-16 flex flex-col justify-center" >
                    <h1 style={{ fontSize: '2rem', textAlign: 'center', fontWeight: 'bold', margin: '20px 0' }}>
                        Login
                    </h1>
                    <label htmlFor="user-email" className="block text-md font-bold mb-2" style={{ paddingTop: "13px" }}>
                        Email
                    </label>
                    <input
                        id="user-email"
                        className="rounded-md w-full py-3 px-3  focus:outline-none bg-[#E3FEF0]"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => handleChange(e)}
                        autoComplete="on"
                        required
                    />
                    <div className="form-border"></div>
                    <label htmlFor="user-password" className="block text-md font-bold mb-2" style={{ paddingTop: "22px" }}>
                        Password
                    </label>
                    <input
                        id="user-password"
                        className="rounded-md w-full py-3 px-3  focus:outline-none bg-[#E3FEF0]"
                        type="password"
                        name="password"
                        placeholder="******"
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <div className="form-border"></div>
                    <input
                        id="submit-btn"
                        type="submit"
                        name="submit"
                        value="LOGIN"
                        className="bg-[#0A9D50] hover:bg-gray-900 w-full mt-3 cursor-pointer text-white font-thin py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                        onClick={handleSubmit}
                    />
                    {/* <a href="#" id="signup">
                        <Link to="/signup" className="mb-4 flex justify-center my-3 text-sm hover:text-blue-800">
                            Don't Have an account?
                        </Link>
                    </a> */}
                </div>
            </div>
        </>
    );
};

export default Login;