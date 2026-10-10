import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../pages/NotFound";
import { OrbitProgress } from "react-loading-indicators";

const Paths = () => {
    const Home = lazy(() => import('../pages/Home'))
    const Contact = lazy(() => import('../pages/Contact'))
    const About = lazy(() => import('../pages/About'))
    const User = lazy(() => import('../pages/User'))

    return (
        <BrowserRouter>
            <Suspense fallback={
                <div className="loading">
                    <OrbitProgress size="small" color="#0f172a" />
                </div>
            }>
                <Routes>
                    <Route path="/" element={<PageLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="contact" element={<Contact/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="user/:id" element={<User/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
 
export default Paths;