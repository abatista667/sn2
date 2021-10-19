import { useState, useEffect } from "react";

const mobileResolution = 700

const useQueryString = (resolution: 'mobile' = 'mobile') => {
    const [isResolution, setIsResolution] = useState(false);

    const checkResolution = () => {
        if (resolution === 'mobile' && window.innerWidth <= mobileResolution){
            setIsResolution(true);
            return;
        }

        setIsResolution(false);
        return;
    }

    useEffect(() => {
        checkResolution();

        window.addEventListener('resize', checkResolution);
        return () => window.removeEventListener('resize', checkResolution)
    }, []);

    return isResolution;
}

export default useQueryString;