import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import logo from "../statics/img/logo.png";
import { useState } from "react";

const keyLang = {
    vi: "Tiếng Việt",
    en: "English"
};

export default function Header(props) {
    const router = useRouter();

    const [lang, setLang] = useState(router.locale);
    let path = router.pathname;
    const changeLang = (lang) => {
        setLang(lang);
        router.push(path, path, { locale: lang });
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">
                        <Image
                            src={logo}
                            alt="img1"
                            className="d-block w-100"
                        />
                    </a>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/what-we-do">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    What we do
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/contact-us">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    Contact us
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {keyLang[lang]}
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li
                                    onClick={() => {
                                        changeLang("vi");
                                    }}
                                >
                                    <a className="dropdown-item">Tiếng Việt</a>
                                </li>

                                <li
                                    onClick={() => {
                                        changeLang("en");
                                    }}
                                >
                                    <a className="dropdown-item">English</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
