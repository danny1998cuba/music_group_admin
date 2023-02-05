import { useEffect } from 'react';

export const useNotikaFormStyles = (apply, buttonClasses) => {
    useEffect(() => {
        apply.controls && formControls()
        apply.button && buttonList(buttonClasses)
    }, [])

    return {}
}

const formControls = () => {
    let inputs = [...document.querySelectorAll('.form-group')]

    inputs.forEach(fg => {
        let input = [...fg.childNodes].find(inp => inp.nodeName === 'INPUT')
        input.classList.add('form-control')

        let wrapper = document.createElement('div')
        wrapper.classList.add('nk-int-st')
        input.parentElement.replaceChild(wrapper, input)
        wrapper.appendChild(input)

        wrapper.addEventListener('focusin', () => wrapper.classList.add('nk-toggled'))
        wrapper.addEventListener('focusout', () => wrapper.classList.remove('nk-toggled'))

        if (input.type == 'file') {
            fileControl(input, wrapper)
        }
    })
}

const fileControl = (input, wrapper) => {
    wrapper.classList.add('file-wrapper')
    input.id = input.name

    let title = document.createElement('label')
    title.classList.add('title')
    title.innerHTML = `${input.placeholder}: `
    wrapper.appendChild(title)

    let label = document.createElement('label')
    label.innerHTML = `<a data-toggle="tooltip" data-placement="left" title="" class="btn btn-success notika-btn-success waves-effect" data-original-title="${input.placeholder}"><i class="notika-icon notika-sent"></i></a   >`
    label.htmlFor = input.name
    wrapper.appendChild(label)

    let info = document.createElement('span')
    info.id = 'info'

    info.innerHTML = `No file selected`
    input.onchange = (e) => {
        let pdrs = document.getElementById(e.target.id)?.files[0]?.name
        document.getElementById('info').innerHTML = (pdrs ? pdrs : 'No file selected')
    }

    wrapper.appendChild(info)
}

const buttonList = (buttonClasses) => {
    let inputs = [...document.querySelectorAll('.btn-list')]

    inputs.forEach(fg => {
        let input = [...fg.childNodes].find(inp => inp.nodeName === 'INPUT')
        buttonClasses.forEach(clazz => input.classList.add(clazz))
    })
}