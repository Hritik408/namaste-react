import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

    useEffect(() => {
        const setOnline = () => setOnlineStatus(true);
        const setOffline = () => setOnlineStatus(false);

        window.addEventListener("online", setOnline);
        window.addEventListener("offline", setOffline);

        return () => {
            window.removeEventListener("online", setOnline);
            window.removeEventListener("offline", setOffline);
        };
    }, []);

    // boolean value
    return onlineStatus;
};

export default useOnlineStatus;










// import { useEffect, useState } from "react";

// const useOnlineStatus = () => {
//     const[onlineStatus, setonlineStatus] = useState(true);

//     useEffect(()=>{
//         window.addEventListener("offline",()=>{
//             setonlineStatus("false");
//         });

//         window.addEventListener("online",()=>{
//             setonlineStatus("true");
//         });
//     }, []);

//      // boolean value
//     return onlineStatus;
// }   

// export default useOnlineStatus;
