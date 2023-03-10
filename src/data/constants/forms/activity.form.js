import { wps, data } from '../../mocks'

const workplaces = async () => {
    return wps.map(wp => {
        return {
            value: wp.name,
            desc: wp.name
        }
    })
}

const clothes = async () => {
    return data.clothes.map(cloth => {
        return {
            value: `${cloth.color} ${cloth.category}`,
            desc: `${cloth.color} ${cloth.category}`
        }
    })
}

const activityForm = async () => {
    return [
        {
            type: "date",
            name: "date",
            placeholder: "Date",
            label: "Date",
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
            class: "form-group",
            options: await workplaces(),
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
            label: "Clothes",
            value: "",
            class: "form-group",
            options: await clothes()
        },

        {
            type: 'header',
            text: 'Gains Details'
        },
        // TODO: Add a custom dynamic component that accepts an array of objects of any type for the currencies
        {
            type: "number",
            typeValue: "number",
            name: "founding",
            placeholder: "Founding",
            label: "Founding",
            value: 0,
            class: "form-group",
            validations: [
                {
                    type: 'min',
                    value: 0,
                    message: 'The founding must be a positive number'
                },
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
}

export default activityForm