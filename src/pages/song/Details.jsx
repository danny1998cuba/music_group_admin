import { useEffect, useState } from 'react'
import { EditText, EditTextarea } from 'react-edit-text'
import { useNavigate, useParams } from 'react-router-dom'
import 'react-edit-text/dist/index.css'

import _ from 'lodash'

import { data, wps } from '../../data/mocks'

export const Details = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [element, setElement] = useState({})

    useEffect(() => {
        let finded = data.songs.find(el => el.id === params.id)
        if (!finded) {
            navigate('/error', { replace: true })
        }
        setElement(finded)
    }, [navigate, params])

    const transparentEditBtnProps = { style: { background: 'transparent' } }

    const handleSave = ({ name, value, prevValue }) => {
        if (value !== prevValue) {
            _.set(element, name, value)
        }
    }

    const handleSubmit = (e) => {
        console.log(element)
    }

    if (!element.details || element.composer.length == 0) {
        return null
    }

    return (
        <div>
            <h3>
                <EditText
                    name='title'
                    defaultValue={element.title}
                    placeholder='Title empty'
                    onSave={handleSave}
                    showEditButton
                    editButtonProps={transparentEditBtnProps}
                />
            </h3>
            <hr />

            <div className="details-box">
                <fieldset>
                    <legend>Composing details</legend>
                    {
                        element.composer.map((comp, index) => (
                            <div className="row" key={`composer${index}`}>
                                <div className="col col-sm-2">
                                    <b>Composer: </b>
                                </div>
                                <div className="col col-sm-10">
                                    <div className="row no-margin">
                                        <div className="col-sm-6">
                                            <EditText
                                                name={`composer.${index}.name`}
                                                defaultValue={comp.name}
                                                placeholder='Name empty'
                                                onSave={handleSave}
                                                inline
                                            />
                                            &nbsp;
                                            <span>-</span>
                                            &nbsp;
                                            <EditText
                                                name='name'
                                                defaultValue={comp.country}
                                                placeholder='Name empty'
                                                onSave={handleSave}
                                                inline
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            (
                                            <EditText
                                                type='number'
                                                name='name'
                                                defaultValue={comp.birth_year?.toString()}
                                                placeholder='No birth year'
                                                onSave={handleSave}
                                                inline
                                            />
                                            -
                                            <EditText
                                                type='number'
                                                name='name'
                                                defaultValue={comp.death_year?.toString()}
                                                placeholder='No death year'
                                                onSave={handleSave}
                                                inline
                                            />
                                            )
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    }

                    <div className="row">
                        <div className="col col-sm-2">
                            <b>Arranger: </b>
                        </div>
                        <div className="col-sm-10">
                            <EditText
                                name='arranger'
                                defaultValue={element.arranger}
                                placeholder='Arranger empty'
                                onSave={handleSave}
                                showEditButton
                                editButtonProps={transparentEditBtnProps}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-sm-2">
                            <b>Genre: </b>
                        </div>
                        <div className="col-sm-10">
                            <EditText
                                name='genre'
                                defaultValue={element.genre}
                                placeholder='Genre empty'
                                onSave={handleSave}
                                showEditButton
                                editButtonProps={transparentEditBtnProps}
                            />
                        </div>
                    </div>

                </fieldset>
                <fieldset>
                    <legend>Musical details</legend>

                    <div className="row">
                        <div className="col-sm-4">
                            <div className="row no-margin">
                                <div className="col col-sm-4">
                                    <b>Tempo: </b>
                                </div>
                                <div className="col-sm-8">
                                    <EditText
                                        type='number'
                                        name='details.tempo'
                                        defaultValue={element.details.tempo.toString()}
                                        placeholder='Tempo empty'
                                        onSave={handleSave}
                                        showEditButton
                                        editButtonProps={transparentEditBtnProps}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="row no-margin">
                                <div className="col col-sm-4">
                                    <b>Signature: </b>
                                </div>
                                <div className="col-sm-8">
                                    <EditText
                                        name='signature'
                                        defaultValue={element.details.signature}
                                        placeholder='Signature empty'
                                        onSave={handleSave}
                                        showEditButton
                                        editButtonProps={transparentEditBtnProps}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="row no-margin">
                                <div className="col col-sm-2">
                                    <b>Key: </b>
                                </div>
                                <div className="col-sm-10">
                                    <EditText
                                        name='key'
                                        defaultValue={element.details.key}
                                        placeholder='Key empty'
                                        onSave={handleSave}
                                        showEditButton
                                        editButtonProps={transparentEditBtnProps}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-sm-2">
                            <b>Measures number: </b>
                        </div>
                        <div className="col-sm-10">
                            <EditText
                                type='number'
                                name='details.measures_number'
                                defaultValue={element.details.measures_number.toString()}
                                placeholder='No measures number empty'
                                onSave={handleSave}
                                showEditButton
                                editButtonProps={transparentEditBtnProps}
                            />
                        </div>
                    </div>
                </fieldset >

                <fieldset>
                    <legend>Documents</legend>
                    <div className="container">
                        <button className='btn btn-success notika-btn-success' style={{marginBottom:'30px'}}>
                            Add new document
                        </button>

                        {
                            (element.scores.length != 0) ?
                                element.scores.map((doc, index) => (
                                    <div className="d-flex align-center" key={`doc${index}`}>
                                        <span style={{ marginRight: '20px' }}>
                                            Document {index}
                                        </span>
                                        <a className='btn btn-success notika-btn-success'>
                                            <i className="fa fa-download" />
                                        </a>
                                    </div>
                                ))
                                : <p>No documents</p>
                        }
                    </div>
                </fieldset>


                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-success notika-btn-success" onClick={handleSubmit}>Save changes</button>
                    </div>
                </div>
            </div >
        </div >
    )
}
