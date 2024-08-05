import Link from 'next/link';

const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Sorry the page you are looking for cannot be found</p>
            <Link href="/">Return to homepage</Link>
        </div>
    )
};

export default NotFound;