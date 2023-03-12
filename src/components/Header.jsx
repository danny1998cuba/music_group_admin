// TODO: Dropdowns

import { Link } from "react-router-dom"
import { AppRoutes } from "../data/constants"

export const Header = () => {
  return (
    <div className="header-top-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="logo-area">
              <Link to={`/${AppRoutes.MainRoutes.dashboard}`}><img src="/images/logo-dark.svg" alt="logo" className="logo" /></Link>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div className="header-top-menu">
              <ul className="nav navbar-nav notika-top-nav flex-row">
                <li className="nav-item dropdown" role='button'>
                  <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle"><span><i className="notika-icon notika-search"></i></span></a>
                  <div role="menu" className="dropdown-menu search-dd animated flipInX">
                    <div className="search-input" role="menuitem">
                      <i className="notika-icon notika-left-arrow"></i>
                      <input type="text" />
                    </div>
                  </div>
                </li>
                <li className="nav-item nc-al"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle"><span><i className="notika-icon notika-alarm"></i></span><div className="spinner4 spinner-4"></div><div className="ntd-ctn"><span>3</span></div></a>
                  <div role="menu" className="dropdown-menu message-dd notification-dd animated zoomIn">
                    <div className="hd-mg-tt">
                      <h2>Notification</h2>
                    </div>
                    <div className="hd-message-info">
                      <a href="#">
                        <div className="hd-message-sn">
                          <div className="hd-message-img">
                            <img src="img/post/1.jpg" alt="" />
                          </div>
                          <div className="hd-mg-ctn">
                            <h3>David Belle</h3>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="hd-message-sn">
                          <div className="hd-message-img">
                            <img src="img/post/2.jpg" alt="" />
                          </div>
                          <div className="hd-mg-ctn">
                            <h3>Jonathan Morris</h3>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="hd-message-sn">
                          <div className="hd-message-img">
                            <img src="img/post/4.jpg" alt="" />
                          </div>
                          <div className="hd-mg-ctn">
                            <h3>Fredric Mitchell</h3>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="hd-message-sn">
                          <div className="hd-message-img">
                            <img src="img/post/1.jpg" alt="" />
                          </div>
                          <div className="hd-mg-ctn">
                            <h3>David Belle</h3>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="hd-message-sn">
                          <div className="hd-message-img">
                            <img src="img/post/2.jpg" alt="" />
                          </div>
                          <div className="hd-mg-ctn">
                            <h3>Glenn Jecobs</h3>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="hd-mg-va">
                      <a href="#">View All</a>
                    </div>
                  </div>
                </li>
                <li className="nav-item"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle"><span><i className="notika-icon notika-menus"></i></span><div className="spinner4 spinner-4"></div><div className="ntd-ctn"><span>2</span></div></a>
                  <div role="menu" className="dropdown-menu message-dd task-dd animated zoomIn">
                    <div className="hd-mg-tt">
                      <h2>Tasks</h2>
                    </div>
                    <div className="hd-message-info hd-task-info">
                      <div className="skill">
                        <div className="progress">
                          <div className="lead-content">
                            <p>HTML5 Validation Report</p>
                          </div>
                          <div className="progress-bar wow fadeInLeft" data-progress="95%" style={{ width: '95%' }} data-wow-duration="1.5s" data-wow-delay="1.2s">
                            <span>95%</span>
                          </div>
                        </div>
                        <div className="progress">
                          <div className="lead-content">
                            <p>Google Chrome Extension</p>
                          </div>
                          <div className="progress-bar wow fadeInLeft" data-progress="85%" style={{ width: '85%' }} data-wow-duration="1.5s" data-wow-delay="1.2s"><span>85%</span> </div>
                        </div>
                        <div className="progress">
                          <div className="lead-content">
                            <p>Social Internet Projects</p>
                          </div>
                          <div className="progress-bar wow fadeInLeft" data-progress="75%" style={{ width: '75%' }} data-wow-duration="1.5s" data-wow-delay="1.2s"><span>75%</span> </div>
                        </div>
                        <div className="progress">
                          <div className="lead-content">
                            <p>Bootstrap Admin</p>
                          </div>
                          <div className="progress-bar wow fadeInLeft" data-progress="93%" style={{ width: '65%' }} data-wow-duration="1.5s" data-wow-delay="1.2s"><span>65%</span> </div>
                        </div>
                        <div className="progress progress-bt">
                          <div className="lead-content">
                            <p>Youtube App</p>
                          </div>
                          <div className="progress-bar wow fadeInLeft" data-progress="55%" style={{ width: '55%' }} data-wow-duration="1.5s" data-wow-delay="1.2s"><span>55%</span> </div>
                        </div>
                      </div>
                    </div>
                    <div className="hd-mg-va">
                      <a href="#">View All</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
