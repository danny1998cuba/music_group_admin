import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { AppRoutes } from "../data/constants"
import { mainMenuItems } from "../data/mocks"
import './mainMenu.css'

// TODO - Change Active Menu
export const MainMenu = () => {
  const location = useLocation()
  const [active, setActive] = useState(0)
  
  useEffect(() => {
    if (location.pathname != `/${AppRoutes.MainRoutes.dashboard}/not_imp`) {
      let menu = mainMenuItems.filter(menu => menu.submenu.some(submenu => location.pathname.includes(submenu.href)))
      menu.length > 1 ? setActive(mainMenuItems.indexOf(menu[1])) : setActive(0)
    } else {
      setActive(0)
    }
  }, [])

  return (
    <div className="main-menu-area mg-tb-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

            <div className="navbar navbar-default">
              <div className="navbar-header"><p className="navbar-brand" style={{ 'margin': '0' }}>Options</p>
                <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" style={{ 'color': '#777' }}>
                  <i className="fa fa-bars"></i>
                </button>
              </div>

              <div className="navbar-collapse collapse">
                <ul className="nav nav-tabs notika-menu-wrap menu-it-icon-pro">
                  {
                    mainMenuItems.map((menu, index) => (
                      <li className={index === active ? 'active' : ''} key={menu.id}>
                        <a data-toggle="tab" href={`#${menu.id}`}>
                          <i className={`${menu.icon.includes('notika') ? 'notika-icon' : 'fa'} ${menu.icon}`}></i> {menu.name}
                        </a>
                      </li>
                    ))
                  }
                </ul>
                <div className="tab-content custom-menu-content">
                  {
                    mainMenuItems.map((menu, index) => (
                      <div key={menu.id} id={menu.id} className={`tab-pane notika-tab-menu-bg animated flipInX ${index === active ? 'in active' : ''}`}>
                        <ul className="notika-main-menu-dropdown">
                          {
                            menu.submenu.map(submenu => (
                              <li key={submenu.name}><NavLink to={submenu.href}>{submenu.name}</NavLink>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
