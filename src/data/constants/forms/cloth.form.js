const clothForm = [
    {
        type: "select",
        name: "category",
        label: "Category: ",
        value: "",
        // class: "form-group",
        options: [
            {
                value: "Shoes",
                desc: "Shoes",
            },
            {
                value: "Shirt",
                desc: "Shirt"
            },
            {
                value: "T-Shirt",
                desc: "T-Shirt"
            },
            {
                value: "Pants",
                desc: "Pants"
            },
            {
                value: "Blaiser",
                desc: "Blaiser"
            },
        ],
        validations: [
            {
                type: "required",
                message: "Category is required"
            }
        ]
    },
    {
        type: "text",
        name: "color",
        placeholder: "Color",
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
                message: "The color is required"
            },
        ],
    },
    {
        type: "text",   //change to textarea
        name: "description",
        placeholder: "Description",
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
                message: "The description is required"
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

export default clothForm