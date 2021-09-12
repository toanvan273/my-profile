import React, { useEffect } from "react";
import styled from "styled-components";

const Bound = styled.div`
    .contact-session {
        .context {
            display: flex;
            flex-direction: column;
        }
    }
`;
function ContactUs() {
    // const myMap = () => {
    //     var mapProp = {
    //         center: new google.maps.LatLng(51.508742, -0.12085),
    //         zoom: 5
    //     };
    //     var map = new google.maps.Map(
    //         document.getElementById("googleMap"),
    //         mapProp
    //     );
    // };
    // useEffect(() => {
    //     myMap();
    // }, []);
    return (
        <Bound id="contactPage">
            <div className="container">
                <h1>Contact Us</h1>
                <div className="google-map">
                    <div
                        id="googleMap"
                        style={{ width: "100%", height: "400px" }}
                    ></div>
                </div>
            </div>
            <div className="contact-session">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <form>
                                <h2>Contact Form</h2>
                                <p>
                                    Send an Email. All fields with an asterisk
                                    (*) are required.
                                </p>
                                <div className="form-group">
                                    <div className="col-sm-6">
                                        <div className="context">
                                            <label>Name</label>
                                            <input type="text"></input>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="context">
                                            <label>Email</label>
                                            <input type="text"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="context">
                                        <label>Subject</label>
                                        <input type="text"></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea cols="50" rows="10"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit">SEND EMAIL</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-4">
                            <div className="label-group">
                                <h4>CONTACT</h4>
                                <h1>
                                    <b>JA Insight</b>
                                </h1>
                            </div>
                            <div className="label-group"></div>
                            <div className="label-group">
                                <h4>ADDRESS</h4>
                                <p>
                                    4 5th Avenue at St. Marks Place, Cathedral
                                    District Brooklyn
                                </p>
                            </div>
                            <div className="label-group">
                                <h4>TELEPHONE</h4>
                                <p>0584 30948</p>
                            </div>
                            <div className="label-group">
                                <h4>FAX</h4>
                                <p>(084) 168-993-7763</p>
                            </div>
                            <div className="label-group">
                                <h4>WEBSITE</h4>
                                <p>https://joomlart.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Bound>
    );
}

export default ContactUs;
