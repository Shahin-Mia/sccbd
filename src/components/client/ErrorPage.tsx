import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError() as any; // Capture the error thrown by the loader or routes
    console.error(error); // Optionally log the error for debugging

    return (
        <div className='container mx-auto p-8 text-center'>
            <h1>Oops! Something went wrong.</h1>
            <p className='text-center'>Sorry, an unexpected error has occurred.</p>
            {error.statusText || error.message ? (
                <div className='text-center'>
                    <h2 className='text-6xl'>500</h2>
                    <span>Internal Server Error</span>
                </div>
            ) : null}
            <a href='/' className='btn btn-neural'>Go to Homepage</a>
        </div>
    );
};

export default ErrorPage;
