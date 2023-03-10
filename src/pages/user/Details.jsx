import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { wps } from '../../data/mocks'

export const Details = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [element, setElement] = useState({})

    useEffect(() => {
        let finded = wps.find(el => el.id === params.id)
        if (!finded) {
            navigate('/error', { replace: true })
        }
        setElement(finded)
    }, [navigate, params])

    return (
        <div>
            <h3>{element.name}</h3>
        </div>
    )
}
