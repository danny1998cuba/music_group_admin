import { DynamicForm } from "d98c_dynamic-forms";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader, RecentAdded } from "../../components"
import { Forms } from "../../data/constants";
import { wps } from '../../data/mocks'
import { notikaFormStyles } from "../../helpers";

export const Create = () => {
    let navigate = useNavigate()

    let [form, setForm] = useState(null)

    useEffect(async () => {
        await Forms.workplaceForm().then(res => setForm(res)).catch(err => navigate('../'))
        notikaFormStyles(
            { controls: true, button: true },
            ['btn', 'btn-success', 'notika-btn-success', 'waves-effect']
        )
    }, [])

    const [value, setValue] = useState({})

    const onSubmit = (data) => {
        setValue(data)
        console.log(value)
    };

    return (
        <>
            <h3 className="page-title">Create Workplace</h3>

            <div className="row">
                <div className="col-lg-8 col-md-7 col-sm-6 col-xs-12">
                    {
                        form ? <DynamicForm
                            formInputs={form}
                            onSubmit={onSubmit}
                        /> : <Loader />
                    }
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12">
                    <RecentAdded data={wps.slice(0, 3)} keys={{ name: 'name', desc: 'contract_from' }} />
                </div>
            </div>
        </>
    )
}
