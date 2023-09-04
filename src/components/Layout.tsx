import React from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
interface LayoutProps {
    children: React.ReactNode;
}
// import styles from "../styles/Layout.module.css";

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />

            {children}
            <Footer />
        </div>
    );
};

export default Layout;
