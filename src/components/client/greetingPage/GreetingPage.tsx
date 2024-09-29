import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function GreetingPage(): React.JSX.Element {
    const location = useLocation();  // Access the location object

    const { message } = location.state;

    useEffect(() => {
        const registered = localStorage.getItem("isSignedUp");

        if (registered) {
            return () => {
                localStorage.removeItem("isSignedUp");
            }
        }
    }, []);

    return (
        <div className="hero h-[70vh]">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Thank you</h1>
                    <p className="py-6">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GreetingPage