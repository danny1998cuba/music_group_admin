import { Footer, Header, MainMenu, MobileMenu } from "../components";

export const MainLayout = () => {
    return (
        <>
            <Header />
            <MobileMenu />
            <MainMenu />

            <div className="main" style={{ 'min-height': '60vh' }}>
                <div className="container">
                    <p className="pl-5">
                        Main Section
                    </p>
                </div>
            </div>

            <Footer />
        </>
    )
}
