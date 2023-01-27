import { mainMenuItems } from "../data/mocks"

// TODO - Change Active Menu
export const MainMenu = () => {
  const data = mainMenuItems

  return (
    <div className="main-menu-area mg-tb-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <ul className="nav nav-tabs notika-menu-wrap menu-it-icon-pro">

              {
                mainMenuItems.map((menu, index) => (
                  <li className={index == 0 ? 'active' : ''} key={menu.id}>
                    <a data-toggle="tab" href={`#${menu.id}`}>
                      <i className={`notika-icon ${menu.icon}`}></i> {menu.name}
                    </a>
                  </li>
                ))
              }
            </ul>
            <div className="tab-content custom-menu-content">
              {
                mainMenuItems.map((menu, index) => (
                  <div key={menu.name} id={menu.id} className={`tab-pane notika-tab-menu-bg animated flipInX ${index == 0 ? 'in active' : ''}`}>
                    <ul className="notika-main-menu-dropdown">
                      {
                        menu.submenu.map(submenu => (
                          <li><a href={submenu.href}>{submenu.name}</a>
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
  )
}
