import React from 'react'

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-grid" style={{marginTop: 225, marginBottom: 100}}>
                <div>
                    <form>
                        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#CCCCCC', borderRadius: 20, padding: 20 }}>
                            <input type="email" name="email" placeholder="Email*" style={{ marginBottom: 20 }} />
                            <textarea name="message" rows="6" placeholder="Message*" style={{ marginBottom: 20 }}></textarea>
                            <input type="button" value="Send message" />
                        </div>
                    </form>
                </div>
                <div>
                    <h4>Saudi Arabia</h4>

                    <div style={{ display: 'flex', marginBottom: 11 }}>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Al Safa District3, Price Majed Road, PO<br/> Box 21463, Jeddah, Saudi Arabia</p>
                    </div>
                    <div style={{ display: 'flex', marginBottom: 11 }}>
                        <i className="fas fa-phone"></i>
                        <p>+966 12 6938496</p>
                    </div>
                    <div style={{ display: 'flex', marginBottom: 11 }}>
                        <i className="fas fa-envelope"></i>
                        <p>toy@samaco.com.sa</p>
                    </div>

                    <hr />
                    <h4>Dubai, UAE</h4>

                    <div style={{ display: 'flex', marginBottom: 11 }}>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>33rd Floor, I-Rise Tower, Hessa Street, <br/>Tecom, PO  Box 29244, Dubai, UAE</p>
                    </div>
                    <div style={{ display: 'flex', marginBottom: 11 }}>
                        <i className="fas fa-phone"></i>
                        <p>+971 4 4421888 </p>
                    </div>
                    <div style={{ display: 'flex', marginBottom: 11 }}>
                        <i className="fas fa-envelope"></i>
                        <p>Info@firstgroupintl.com</p>
                    </div>

                    <div style={{ display: 'flex', marginTop: 75 }}>
                        <img src="/img/alnahla-logo.png" alt="AlNahla Group" />
                        <p style={{fontSize: 30, marginLeft: 45}}>part of <br/>al nahla group</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                section {
                    background-image: url(/img/sections/contact.png);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-attachment: fixed;
                }

                .contact-grid {
                    display: grid;
                    grid-column-gap: 80px;
                    grid-template-columns: 50% 50%;
                }

                input, textarea {
                    font-size: 25px;
                    padding: 30px;
                    border-radius: 18px;
                    border: 1px solid white;
                    background-color: transparent;
                }

                input[type=button] {
                    background-color: white;
                    border: none;
                }

                input:focus, textarea:focus {
                    outline: 0;
                }

                h4 { 
                    font-size: 38px;
                    color: #EFB71C;
                    margin-bottom: 16px;
                }

                p { font-size: 25px; }

                i {
                    color: #847F7F;
                    font-size: 25px;
                    margin-right: 20px;
                }

                hr {
                    margin: 33px 0px;
                }
            `}</style>
        </section>
    )
}

export default Contact
