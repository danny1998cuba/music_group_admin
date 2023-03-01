import _ from 'lodash'
import moment from "moment"

export const useEditTextHandlers = (element) => {
    const handleSave = ({ name, value, prevValue }) => {
        if (value !== prevValue) {
            /** Check if it's a  valid date */
            let isDate = moment(value, true)
            if (isDate.isValid()) {
                value = isDate.toDate()
            }

            /** Set the new value */
            _.set(element, name, value)
        }
    }

    return {
        handleSave
    }
}