import { ForgetPass, SignIn, SignUp } from '../components'


// TODO - Cursor Pointer on Components
export const Auth = () => {
    const handleSwap = (id) => {
        const el = document.getElementById(id)
        const blocks = [...document.querySelectorAll('.nk-block')];

        blocks.forEach(elem => { if (elem.classList.contains('toggled')) { elem.classList.remove('toggled'); } })
        el.classList.add('toggled')
    }

    return (
        <div className="login-content">
            {/* <!-- Login --> */}
            <SignIn handler={handleSwap} />

            {/* <!-- Register --> */}
            <SignUp handler={handleSwap} />

            {/* <!-- Forgot Password --> */}
            <ForgetPass handler={handleSwap} />
        </div>
    )
}
