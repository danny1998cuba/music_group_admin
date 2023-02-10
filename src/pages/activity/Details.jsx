import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { data } from '../../data/mocks'

export const Details = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [element, setElement] = useState({})

    useEffect(() => {
        let finded = data.acts.find(el => el.id === params.id)
        if (!finded) {
            navigate('/error', { replace: true })
        }
        setElement(finded)
    }, [navigate, params])

    const transparentEditBtnProps = { style: { background: 'transparent' } }

    const handleSave = ({ name, value, prevValue }) => {
        if (value !== prevValue) {
            element[name] = value
        }
    }

    const handleSubmit = (e) => {
        console.log(element)
    }


    return (
        <div>
            <h3>{element.name}</h3>
        </div>
    )
}
