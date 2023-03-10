import { DynamicForm } from "d98c_dynamic-forms";
import { useEffect, useState } from "react";
import { RecentAdded } from "../../components";
import { Forms } from "../../data/constants";
import { notikaFormStyles } from "../../helpers";

export const Create = () => {
    let [form, setForm] = useState(null)

    useEffect(async () => {
        setForm(await Forms.memberForm())
        notikaFormStyles(
            { controls: true, button: true, radio: true },
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
            <h3 className="page-title">Create Member</h3>

            <div className="row">
                <div className="col-lg-8 col-md-7 col-sm-6 col-xs-12">
                    {/* <Form onSubmit={handleLogin}></Form> */}
                    {
                        form && <DynamicForm
                            formInputs={form}
                            onSubmit={onSubmit}
                        />
                    }
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12">
                    <RecentAdded />
                </div>
            </div>
        </>
    )
}
