import { useState } from 'react'

const useTripModel = () => {
    const [tripInfo, setTripInfo] = useState({});
    const [token, setToken] = useState(null);
    return {tripInfo, setTripInfo, token, setToken}
}

export default useTripModel;