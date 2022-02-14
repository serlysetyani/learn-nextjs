import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter()
    // Redirect user to homepage in 4s
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    })
    return (
        <div className="not-found">
            <h1>Oops...</h1>
            <h2>The page you are looking for is not found.</h2>
            <p>Back to <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}

export default NotFound
    ;