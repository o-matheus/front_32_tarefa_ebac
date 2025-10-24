import { useEffect, useState } from "react";
import MobileHome from "./MobileHome";
import DesktopHome from "./DesktopHome";

const Home = () => {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia ? window.matchMedia('(max-width: 768px)').matches : window.innerWidth <= 768;
    })

    useEffect(() => {
        if (typeof window === "undefined") return;
        const mq = window.matchMedia('(max-width: 768px');

        const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
            setIsMobile(e.matches)
        }

        if (mq.addEventListener) {
            mq.addEventListener('change', handleChange as EventListener);
        }

        const onOrientation = () => setIsMobile(mq.matches);
        window.addEventListener('orientationchange', onOrientation)

        return () => {
            if (mq.removeEventListener) {
                mq.removeEventListener('change', handleChange as EventListener)
            }
            window.removeEventListener('orientationchange', onOrientation)
        }
    }, [])
    return (
        <>
            {isMobile ? <MobileHome /> : <DesktopHome />}
        </>
    )
}

export default Home;