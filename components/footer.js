import styled from "styled-components";

function Footer() {
    return (
        <Bound>
            <div className="container">
                <div className="row d-flex">
                    <p className="mb-0">
                        COPYRIGHT © 2021 JOOMLART DEMO SITE. ALL RIGHTS
                        RESERVED. DESIGNED BY JOOMLART.COM.
                    </p>
                </div>
            </div>
        </Bound>
    );
}
export default Footer;
const Bound = styled.div`
    border-top: 1px solid #eaeaea;
    background-color: #111111;
    height: 50px;
    display: flex;
    align-items: center;
    color: #888888;
`;
