const activityForm = [
    {
        type: "date",
        name: "date",
        placeholder: "Date",
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
                message: "The date is required"
            },
        ],
    },
    {
        type: "select",
        name: "workplace",
        label: "Workplace",
        value: "",
        options: [],
        validations: [
            {
                type: "required",
                message: "The workplace is required"
            },
        ],
    },
    {
        type: "select",
        name: "clothes",
        label: "clothes",
        value: "",
        options: []
    },
    // TODO: Add a custom dynamic component that accepts an array of objects of any type for the currencies
    {
        type: "number",
        name: "founding",
        placeholder: "Founding",
        value: "0",
        class: "form-group",
        validations: [
            {
                type: "required",
                message: "The founding is required"
            },
        ],
    },
    {
        type: 'submit',
        name: 'btn',
        value: 'Submit',
        class: 'btn-list'
    }
]

export default activityForm