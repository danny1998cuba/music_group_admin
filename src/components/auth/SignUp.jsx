export const SignUp = ({ handler }) => {
  return (
    <div className="nk-block" id="l-register">
      <form className="nk-form">
        <div className="input-group">
          <span className="input-group-addon nk-ic-st-pro"><i className="notika-icon notika-support"></i></span>
          <div className="nk-int-st">
            <input type="text" className="form-control" placeholder="Username" />
          </div>
        </div>

        <div className="input-group mg-t-15">
          <span className="input-group-addon nk-ic-st-pro"><i className="notika-icon notika-mail"></i></span>
          <div className="nk-int-st">
            <input type="text" className="form-control" placeholder="Email Address" />
          </div>
        </div>

        <div className="input-group mg-t-15">
          <span className="input-group-addon nk-ic-st-pro"><i className="notika-icon notika-edit"></i></span>
          <div className="nk-int-st">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
        </div>

        <button type="submit" className="btn btn-login btn-success btn-float"><i className="notika-icon notika-right-arrow"></i></button>
      </form>

      <div className="nk-navigation rg-ic-stl">
        <a onClick={() => handler('l-login')} data-ma-action="nk-login-switch" data-ma-block="#l-login" role='button'><i className="notika-icon notika-right-arrow"></i> <span>Sign in</span></a>
        <a onClick={() => handler('l-forget-password')} data-ma-action="nk-login-switch" data-ma-block="#l-forget-password" role='button'><i>?</i> <span>Forgot Password</span></a>
      </div>
    </div>
  )
}
