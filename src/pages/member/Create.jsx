import { DynamicForm } from "d98c_dynamic-forms";
import { useState } from "react";
import { RecentAdded } from "../../components";
import { Forms } from "../../data/constants";
import { useNotikaFormStyles } from "../../hooks";

export const Create = () => {
    useNotikaFormStyles(
        { controls: true, button: true },
        ['btn', 'btn-success', 'notika-btn-success', 'waves-effect']
    )

    const [value, setValue] = useState({})

    // formControls()

    const onSubmit = (data) => {
        setValue(data)
        console.log(value)
    };

    return (
        <>
            <h3>Create Member</h3>

            <div className="row">
                <div className="col-lg-8 col-md-7 col-sm-6 col-xs-12">
                    {/* <Form onSubmit={handleLogin}></Form> */}
                    <DynamicForm
                        formInputs={Forms.memberForm}
                        onSubmit={onSubmit}
                    />
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12">
                    <RecentAdded />
                </div>
            </div>
        </>
    )
}
