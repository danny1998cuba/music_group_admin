import { Outlet } from "react-router-dom";
import { Footer, Header, MainMenu, MobileMenu } from "../components";

export const MainLayout = () => {
    return (
        <>
            <Header />
            <MobileMenu />
            <MainMenu />

            <div className="main" style={{ 'minHeight': '60vh' }}>
                <div className="container">
                    <Outlet />
                </div>
            </div>

            <Footer />
        </>
    )
}
