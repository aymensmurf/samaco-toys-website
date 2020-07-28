import React from 'react'
import { i18n, withTranslation } from '../../i18n'

const Contact = ({ t, isRTL }) => {
    return (
        <section id="contact">
            <div className="grid-2" style={{ marginTop: 100, marginBottom: 100 }}>
                <div>
                    <form>
                        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#CCCCCC', borderRadius: 20, padding: 20 }}>
                            <input type="email" name="email" placeholder={`${t('email')}*`} style={{ marginBottom: 20 }} />
                            <textarea name="message" rows="6" placeholder={`${t('message')}*`} style={{ marginBottom: 20 }}></textarea>
                            <input type="button" value={t('send_message')} />
                        </div>
                    </form>
                </div>

                <div>
                    <h4>{t('saudi_arabia')}</h4>

                    <div style={{ display: 'flex', marginBottom: 11 }}>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>{t('al_safa_district3___')}<br /> {t('po_box_21463')}</p>
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
                    <h4>{t('dubai_uae')}</h4>

                    <div style={{ display: 'flex', marginBottom: 11 }}>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>{t('33rd_floor___')} <br />{t('po_box_29244')}</p>
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
                        <p style={{ fontSize: 30, marginLeft: isRTL ? 0 : 45, marginRight: isRTL ? 45 : 0 }}>{t('part_of')} <br />{t('al_nahla_group')}</p>
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
                    margin-right: ${isRTL ? '0px' : '20px'};
                    margin-left: ${isRTL ? '20px' : '0px'};
                }

                hr {
                    margin: 33px 0px;
                }

                @media only screen and (max-width: 1300px) {
                    input, textarea {
                        font-size: 18px;
                        padding: 20px;
                    }
                }

                @media only screen and (max-width: 425px) {
                    input, textarea {
                        font-size: 15px;
                        padding: 10px;
                    }

                    p, i {
                        font-size: 18px;
                    }
                }
            `}</style>
        </section>
    )
}

Contact.getInitialProps = async () => ({
    namespacesRequired: ['contact'],
})

export default withTranslation('contact')(Contact)
