const memberForm = async () => {
    return [
        {
            type: "text",
            name: "first_name",
            placeholder: "First Name",
            label: "First Name",
            value: "",
            class: "form-group",
            validations: [
                {
                    type: "minLength",
                    value: 3,
                    message: "Min. 3 characters",
                },
                {
                    type: "required",
                    message: "The First Name is required"
                },
            ],
        },
        {
            type: "text",
            name: "last_name",
            placeholder: "Last Name",
            label: "Last Name",
            value: "",
            class: "form-group",
            validations: [
                {
                    type: "minLength",
                    value: 3,
                    message: "Min. 3 characters",
                },
                {
                    type: "required",
                    message: "The Last Name is required"
                },
            ],
        },
        {
            type: "text",
            name: "identification",
            placeholder: "Identification",
            label: "Identification",
            value: "",
            class: "form-group",
            validations: [
                {
                    type: "minLength",
                    value: 3,
                    message: "Min. 3 characters",
                },
                {
                    type: "required",
                    message: "The identification is required"
                },
            ],
        },
        {
            type: "date",
            name: "birth_date",
            placeholder: "Birth date",
            label: "Birth date",
            value: "",
            class: "form-group",
            validations: [
                {
                    type: "minLength",
                    value: 3,
                    message: "Min. 3 characters",
                },
                {
                    type: "required",
                    message: "The birth date is required"
                },
            ],
        },
        {
            type: "text",
            name: "position",
            placeholder: "Position",
            label: "Position",
            value: "",
            class: "form-group",
            validations: [
                {
                    type: "minLength",
                    value: 3,
                    message: "Min. 3 characters",
                },
                {
                    type: "required",
                    message: "The position is required"
                },
            ],
        },
        {
            type: "radio-group",
            name: "sex",
            label: "Sex",
            class: "form-group",
            inlineOpts: 'true',
            value: "",
            options: [
                {
                    value: 'm',
                    desc: "Male"
                },
                {

                    value: "f",
                    desc: "Female"
                },
                {

                    value: "o",
                    desc: "Other"
                },
            ],
            validations: [
                {
                    type: "required",
                    message: "Sex is required"
                }
            ]
        },
        {
            type: 'submit',
            name: 'btn',
            value: 'Submit',
            class: 'btn-list'
        }
    ]
}

export default memberForm