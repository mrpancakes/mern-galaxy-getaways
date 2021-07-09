import { useState } from 'react'

const useTripModel = () => {
    const [tripInfo, setTripInfo] = useState({})
    return {tripInfo, setTripInfo}
}

export default useTripModel;