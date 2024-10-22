import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError() as any; // Capture the error thrown by the loader or routes
    console.error(error); // Optionally log the error for debugging

    return (
        <div className='container mx-auto p-8 text-center'>
            <h1>Oops! Something went wrong.</h1>
            <p className='text-center'>Sorry, an unexpected error has occurred.</p>
            {error.statusText || error.message ? (
                <p className='text-center'>
                    <i>{error.statusText || error.message}</i>
                </p>
            ) : null}
            <a href='/' className='btn btn-neural'>Go to Homepage</a>
        </div>
    );
};

export default ErrorPage;
