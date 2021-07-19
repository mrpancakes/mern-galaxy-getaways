import { useState } from 'react'

const useTripModel = () => {
    const [tripInfo, setTripInfo] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    return {tripInfo, setTripInfo, loggedIn, setLoggedIn}
}

export default useTripModel;