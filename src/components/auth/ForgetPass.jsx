export const ForgetPass = ({ handler }) => {
  return (
    <div className="nk-block" id="l-forget-password">
      <form className="nk-form">
        <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu risus. Curabitur commodo lorem fringilla enim feugiat commodo sed ac lacus.</p>

        <div className="input-group">
          <span className="input-group-addon nk-ic-st-pro"><i className="notika-icon notika-mail"></i></span>
          <div className="nk-int-st">
            <input type="text" className="form-control" placeholder="Email Address" />
          </div>
        </div>

        <button type="submit" className="btn btn-login btn-success btn-float"><i className="notika-icon notika-right-arrow"></i></button>
      </form>

      <div className="nk-navigation nk-lg-ic rg-ic-stl">
        <a onClick={() => handler('l-login')} data-ma-action="nk-login-switch" data-ma-block="#l-login" role='button'><i className="notika-icon notika-right-arrow"></i> <span>Sign in</span></a>
        <a onClick={() => handler('l-register')} data-ma-action="nk-login-switch" data-ma-block="#l-register" role='button'><i className="notika-icon notika-plus-symbol"></i> <span>Register</span></a>
      </div>
    </div>
  )
}
