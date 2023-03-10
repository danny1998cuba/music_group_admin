import { ApiRoutes } from ".."

const countries = async () => {
    let countries = []
    await fetch(ApiRoutes.ApiRoutes.countries_dev).then(res => res.json()).then(res => countries = res)
    
    let options = countries.map(countrie => {
        return {
            value: countrie,
            desc: countrie
        }
    })

    return options
}

const songForm = async () => {
    return [
        {
            type: "text",
            name: "title",
            placeholder: "Title",
            label: "Title",
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
            name: "arranger",
            placeholder: "Arranger",
            label: "Arranger",
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
            type: 'header',
            text: 'Composer Info'
        },
        {
            type: "text",
            name: "composer_name",
            placeholder: "Composer name",
            label: "Composer name",
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
            options: await countries(),
            validations: [
                {
                    type: "required",
                    message: "The country is required"
                },
            ],
        },
        {
            type: "number",
            typeValue: 'number',
            name: "composer_birth_year",
            placeholder: "Birth year",
            label: "Birth year",
            value: "",
            class: "form-group",
            validations: [
                {
                    type: "min",
                    value: 1800,
                    message: "Select a year after 1800",
                },
                {
                    type: "max",
                    value: new Date().getFullYear(),
                    message: "Select a year before the current one",
                }
            ],
        },
        {
            type: "number",
            typeValue: 'number',
            name: "composer_death_year",
            placeholder: "Death year",
            label: "Death year",
            value: "",
            class: "form-group",
            validations: [
                {
                    type: "min",
                    value: 1800,
                    message: "Select a year after 1800",
                },
                {
                    type: "max",
                    value: new Date().getFullYear(),
                    message: "Select a year before the current one",
                }
            ],
        },
        {
            type: 'header',
            text: 'Song Details'
        },
        {
            type: "text",
            name: "genre",
            placeholder: "Genre",
            label: "Genre",
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
                    message: "The genre is required"
                },
            ],
        },
        {
            type: "number",
            typeValue: 'number',
            name: "details_tempo",
            placeholder: "Tempo",
            label: "Tempo",
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
            label: "Measures number",
            value: "",
            class: "form-group",
            validations: [
                {
                    type: "min",
                    value: 10,
                    message: "There has to be at least 10 measures.",
                }
            ],
        },
        {
            type: "file",
            name: "scores",
            placeholder: "Score",
            label: "Score",
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
}


export default songForm