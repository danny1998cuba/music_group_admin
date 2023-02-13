import { useEffect, useState } from 'react'
import { EditText, EditTextarea } from 'react-edit-text'
import { useNavigate, useParams } from 'react-router-dom'
import 'react-edit-text/dist/index.css'

import { data } from '../../data/mocks'

export const Details = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [element, setElement] = useState({})

    useEffect(() => {
        let finded = data.clothes.find(el => el.id === params.id)
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
            <h3>Cloth</h3>
            <hr />

            <div className="details-box">
                <div className="row">
                    <div className="col col-sm-2">
                        <b>Category: </b>
                    </div>
                    <div className="col-sm-10">
                        <EditText
                            name='category'
                            defaultValue={element.category}
                            placeholder='Category empty'
                            onSave={handleSave}
                            showEditButton
                            editButtonProps={transparentEditBtnProps}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-2">
                        <b>Color: </b>
                    </div>
                    <div className="col-sm-10">
                        <EditText
                            name='color'
                            defaultValue={element.color}
                            placeholder='Color empty'
                            onSave={handleSave}
                            showEditButton
                            editButtonProps={transparentEditBtnProps}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-2">
                        <b>Description: </b>
                    </div>
                    <div className="col-sm-10">
                        <EditTextarea
                            name='description'
                            defaultValue={element.description}
                            placeholder='No description'
                            onSave={handleSave}
                            rows={5}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-success notika-btn-success" onClick={handleSubmit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
