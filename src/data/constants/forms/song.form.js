const songForm = [
    {
        type: "text",
        name: "title",
        placeholder: "Title",
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
                message: "The title is required"
            },
        ],
    },
    {
        type: "text",
        name: "composer_name",
        placeholder: "Composer name",
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
                message: "The composer name is required"
            },
        ],
    },
    {
        type: "select",
        name: "composer_country",
        label: "Country",
        class: "form-group",
        value: "",
        options: [
            {
                value: 'usa',
                desc: 'USA'
            },
            {
                value: 'spain',
                desc: 'Spain'
            },
            {
                value: 'france',
                desc: 'France'
            },
            {
                value: 'germany',
                desc: 'Germany'
            },
        ],
        validations: [
            {
                type: "required",
                message: "The country is required"
            },
        ],
    },
    {
        type: "number",
        name: "composer_birth_year",
        placeholder: "Birth year",
        value: "",
        class: "form-group",
        // validations: [
        //     {
        //         type: "min",
        //         value: 1800,
        //         message: "Select a year after 1800",
        //     },
        //     {
        //         type: "max",
        //         value: new Date().getFullYear(),
        //         message: "Select a year before the current one",
        //     }
        // ],
    },
    {
        type: "number",
        name: "composer_death_year",
        placeholder: "Death year",
        value: "",
        class: "form-group",
        // validations: [
        //     {
        //         type: "min",
        //         value: 1800,
        //         message: "Select a year after 1800",
        //     },
        //     {
        //         type: "max",
        //         value: new Date().getFullYear(),
        //         message: "Select a year before the current one",
        //     }
        // ],
    },
    {
        type: "text",
        name: "arranger",
        placeholder: "Arranger",
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
                message: "The arranger is required"
            },
        ],
    },
    {
        type: "text",
        name: "gender",
        placeholder: "Gender",
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
                message: "The gender is required"
            },
        ],
    },
    {
        type: "number",
        name: "details_tempo",
        placeholder: "Tempo",
        value: "",
        class: "form-group",
        validations: [
            {
                type: "min",
                value: 20,
                message: "The tempo must be greater than 20",
            },
            {
                type: "required",
                message: "The tempo is required"
            },
        ],
    },
    {
        type: "select",
        name: "details_signature",
        label: "Signature",
        class: "form-group",
        value: "",
        options: [
            {
                value: '4/4',
                desc: '4/4'
            },
            {
                value: '3/4',
                desc: '3/4'
            },
            {
                value: '2/4',
                desc: '2/4'
            },
            {
                value: '2/2',
                desc: '2/2'
            },
            {
                value: '6/8',
                desc: '6/8'
            },
        ],
        validations: [
            {
                type: "required",
                message: "The signature is required"
            },
        ],
    },
    {
        type: "select",
        name: "details_key",
        label: "Key",
        class: "form-group",
        value: "",
        options: [
            {
                value: 'C',
                desc: 'C'
            },
            {
                value: 'D',
                desc: 'D'
            },
            {
                value: 'E',
                desc: 'E'
            },
            {
                value: 'F',
                desc: 'F'
            },
            {
                value: 'G',
                desc: 'G'
            },
            {
                value: 'A',
                desc: 'A'
            },
            {
                value: 'B',
                desc: 'B'
            },
        ],
        validations: [
            {
                type: "required",
                message: "The key is required"
            },
        ],
    },
    {
        type: "number",
        name: "measures_number",
        placeholder: "Measures number",
        value: "",
        class: "form-group",
        // validations: [
        //     {
        //         type: "min",
        //         value: 10,
        //         message: "There has to be at least 10 measures.",
        //     }
        // ],
    },
    {
        type: "file",
        name: "scores",
        placeholder: "Score",
        value: "",
        class: "form-group input-file",
    },
    {
        type: 'submit',
        name: 'btn',
        value: 'Submit',
        class: 'btn-list'
    }
]

export default songForm