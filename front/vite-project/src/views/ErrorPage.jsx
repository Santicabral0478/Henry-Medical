import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage(){
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(()=>{
        const countdownInterval = setInterval(()=>{
            setCountdown((prevCountdown) => prevCountdown -1);
        }, 1000)

        setTimeout(()=>{
            clearInterval(countdownInterval);
            navigate("/home")
        }, 5000)

        return ()=> clearInterval(countdownInterval);
    }, [navigate]);

    return(<>
        <h1>Page not Found :/</h1>
        <br />
        <h4>Redirecting to home in {countdown} seconds...</h4>
    </>)
}

export default ErrorPage;