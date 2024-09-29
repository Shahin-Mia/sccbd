import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { User } from '../../../../http/users';

function ActivationPage(): React.JSX.Element {
    const [queryParams] = useSearchParams();  // Access the location object

    const token = queryParams.get("token");

    useEffect(() => {
        if (token) {
            const data = { email_activation_token: token };
            (async () => {
                const response = await User.activation(data);
                console.log(response)
            })();
        }
    }, []);

    return (
        <div className="hero h-[70vh]">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-wrap md:text-nowrap">Your account is active now</h1>
                    <p className="py-6 text-wrap md:text-nowrap">
                        Your account has been activated. You can now login to your account! <Link to="/login" className='text-blue-600'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ActivationPage