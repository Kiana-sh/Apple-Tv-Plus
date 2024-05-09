import { Fragment } from "react";
import Footer from "../Footer";
import Header from "../Header";
import GlobalStyle from "../Style/GlobalStyle";
import UpsellBanner from "../UpsellBanner";

export default function Layout(props) {
    return (
        <Fragment>
            <Header />
            {props.children}
            <Footer />
            <UpsellBanner />
        </Fragment>
    );
};