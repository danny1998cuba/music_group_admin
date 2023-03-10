import { useEffect } from 'react';

export const notikaFormStyles = (apply, buttonClasses) => {
    apply.controls && formControls()
    apply.select && selectControls()
    apply.button && buttonList(buttonClasses)
    apply.radio && radioGroupControls()
    header()
}

const formControls = () => {
    let inputs = [...document.querySelectorAll('.form-group>div')]

    inputs.forEach(fg => {
        fg.classList.add('nk-int-st')
        let input = [...fg.childNodes].find(inp => inp.nodeName === 'INPUT')
        fg.addEventListener('focusin', () => fg.classList.add('nk-toggled'))
        fg.addEventListener('focusout', () => fg.classList.remove('nk-toggled'))

        if (input) {
            input.classList.add('form-control')
            if (input.type === 'file') {
                fileControl(input, fg)
            }
        }
    })
}

const selectControls = () => {
    let selects = [...document.querySelectorAll('.select>div')]

    selects.forEach(fg => {
        let select = [...fg.childNodes].find(inp => inp.nodeName === 'SELECT')

        if (select) {
            select.classList.add('form-control')

            let wrapper = document.createElement('div')
            wrapper.classList.add('nk-int-st')
            select.parentElement.replaceChild(wrapper, select)
            wrapper.appendChild(select)

            wrapper.addEventListener('focusin', () => wrapper.classList.add('nk-toggled'))
            wrapper.addEventListener('focusout', () => wrapper.classList.remove('nk-toggled'))
        }
    })
}

const radioGroupControls = () => {
    let groups = [...document.querySelectorAll('.radio-group')]

    groups.forEach(group => {
        let wrapper = document.querySelector('.radio-group>div>div')
        wrapper.classList.add('nk-int-st')

        let radios = [...wrapper.querySelectorAll('div')]
        radios.forEach(radio => {
            radio.className = ""
            radio.classList.add('radio-inline')
        })
    })
}

const fileControl = (input, wrapper) => {
    wrapper.classList.add('file-wrapper')

    let title = wrapper.querySelector('label')
    title.htmlFor = ''
    title.classList.add('title')

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
    let inputs = [...document.querySelectorAll('.btn-list div')]

    inputs.forEach(fg => {
        let input = [...fg.childNodes].find(inp => inp.nodeName === 'INPUT')
        buttonClasses.forEach(clazz => input.classList.add(clazz))
    })
}

const header = () => {
    let headers = [...document.querySelectorAll('.section-header')]

    headers.forEach(header => {
        header.style = ''

        let parent = header.parentElement
        let wrapper = document.createElement('div')

        parent.replaceChild(wrapper, header)
        wrapper.appendChild(header)
        wrapper.classList.add('typography-hd-cr-3')

        let hr = document.createElement('hr')
        hr.className = 'small-separator'
        wrapper.appendChild(hr)
    })
}