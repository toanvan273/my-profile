import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import logo from "../statics/img/logo.png";
import en from "../statics/img/nen.png";
import vi from "../statics/img/nvi.png";
import { useState } from "react";
import { headerLabel } from "../labels/HeaderLabel";
import styled from "styled-components";
import english from "../statics/img/english.svg";
import vietnam from "../statics/img/vietnam.svg";
const keyLang = {
    vi: "Tiếng Việt",
    en: "English"
};
const LangStyle = styled.li`
    li {
        padding-left: 7px;
    }
    .block {
        padding: 0 15px;
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover {
            background: #f1f1f1;
        }
    }
`;
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
            <div className="container">
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
                                    {headerLabel(lang).home}
                                </a>
                            </Link>
                        </li>

                        {/* <li className="nav-item">
                            <Link href="/what-we-do">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    {headerLabel(lang).whatwedo}
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/contact-us">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    {headerLabel(lang).contact}
                                </a>
                            </Link>
                        </li> */}
                        <LangStyle className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <Image
                                    src={lang === "vi" ? vietnam : english}
                                    alt="img1"
                                    width={18}
                                    height={18}
                                />
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
                                    <div className="block">
                                        <Image
                                            src={vietnam}
                                            alt="img1"
                                            width={18}
                                            height={18}
                                        />
                                        <span className="dropdown ms-2">
                                            Tiếng Việt
                                        </span>
                                    </div>
                                </li>

                                <li
                                    onClick={() => {
                                        changeLang("en");
                                    }}
                                >
                                    <div className="block">
                                        <Image
                                            src={english}
                                            alt="img1"
                                            width={18}
                                            height={18}
                                        />
                                        <span className="dropdown ms-2">
                                            English
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </LangStyle>
                    </ul>
                    {/* <form className="d-flex">
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
                    </form> */}
                </div>
            </div>
        </nav>
    );
}
