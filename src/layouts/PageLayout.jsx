import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Layout.css"

const PageLayout = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet/>
            </main>
            <Footer />
        </>
    );
}
 
export default PageLayout;