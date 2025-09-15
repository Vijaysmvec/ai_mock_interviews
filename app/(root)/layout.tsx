import {ReactNode} from 'react'
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {auth} from "firebase-admin";
import {isAuthenticated} from "@/lib/actions/auth.action";
import {redirect} from "next/navigation";

const RootLayout = async ({children}:{children:ReactNode}) => {
    const  isUserAuthenticated = await isAuthenticated();

    if(!isUserAuthenticated) redirect('/sign-in');

    return (
        <div className="root-layout">
            <nav>
                <Link href="/" className="flex items-center gap-2" >
                    <Image src="/logo.svg" alt="Logo" width={38} height={32}/>
                    <h2 className="text-primary-100">WiseEdge</h2>
                </Link>
                {/*<Link href="/sign-in">*/}
                {/*    <Button className="btn-primary absolute top-0 right-18.5 w-fit px-4 py-2 rounded-bl-lg bg-light-600 mt-5">*/}
                {/*        Sign-in*/}
                {/*    </Button>*/}
                {/*</Link>*/}

                {/*<Link href="/sign-up">*/}
                {/*    <Button className="btn-primary absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600 mt-5">*/}
                {/*        Sign-up*/}
                {/*    </Button>*/}
                {/*</Link>*/}
+
            </nav>
            {children}
        </div>
    )
}
export default RootLayout
