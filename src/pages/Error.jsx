import { useNavigate } from "react-router-dom"

export const Error = ({ number, msg, action }) => {
    const navigate = useNavigate()

    action()

    return (
        <div className="error-page-area">
            <div className="error-page-wrap">
                <i className="notika-icon notika-close"></i>
                <h2>ERROR <span className="counter">{number}</span></h2>
                <p>{msg}</p>
                <button role='link' className="btn" onClick={() => {
                    navigate('/dashboard', { replace: true })
                }}>Dashboard</button>
                <button role='link' className="btn" onClick={() => {
                    navigate(-1, { replace: true })
                }}>Return</button>
                {/* <a href="#" className="btn error-btn-mg">Report Problem</a> */}
            </div>
        </div>
    )
}
