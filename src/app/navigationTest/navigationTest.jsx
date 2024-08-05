"use client"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

const NavigationTest = () =>{
    //Client side navigation
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const q = searchParams.get("q")

    const handleClick = () =>{
        console.log("clicked")
        router.push("/")
        // router.replace("/") // Replaces the current browser history.
    }

    return (
        <div>
            <Link href="/" prefetch={false}> Click here</Link>
            <button onClick={handleClick}>Write and redirect</button>
        </div>
    )
}

export default NavigationTest;