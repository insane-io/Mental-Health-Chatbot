// import { useNavigate } from "react-router-dom";

const HandleError = (error) => {
    // const navigate = useNavigate()

    if(error.response.statusText === "Unauthorized"){
        // navigate("/login")
    }
}

export default HandleError;
