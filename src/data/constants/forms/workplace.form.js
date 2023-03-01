const workplaceForm = [
    {
        type: "text",
        name: "name",
        placeholder: "Name",
        label: "Name",
        value: "",
        class: "form-group",
        validations: [
            {
                type: "minLength",
                value: 10,
                message: "Min. 10 characters",
            },
            {
                type: "required",
                message: "The name is required"
            },
        ],
    },
    {
        type: "text",
        name: "direction",
        placeholder: "Direction",
        label: "Direction",
        value: "",
        class: "form-group"
    },
    {
        type: "date",
        name: "contract_from",
        placeholder: "Contract Date",
        label: "Contract Date",
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
        type: "date",
        name: "contract_to",
        placeholder: "End of contract",
        label: "End of contract",
        value: "",
        class: "form-group",
    },
    {
        type: "file",
        name: "photo",
        placeholder: "Photo",
        label: "Photo",
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

export default workplaceForm