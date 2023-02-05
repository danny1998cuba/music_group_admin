export const formInputs = [
    {
        type: "text",
        name: "name",
        placeholder: "Name",
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
                message: "The name is required"
            },
        ],
    },
    {
        type: "date",
        name: "contract_from",
        placeholder: "Contract Date",
        value: "",
        class: "form-group",
        validations: [
            {
                type: "required",
                message: "Contract date is required"
            }
        ],

    },
    {
        type: "file",
        name: "photo",
        placeholder: "Photo",
        value: "",
        class: "form-group input-file",
        validations: [
            {
                type: "required",
                message: "Photo is required"
            }
        ],

    },
    {
        type: 'submit',
        name: 'btn',
        value: 'Submit',
        class: 'btn-list'
    }
]