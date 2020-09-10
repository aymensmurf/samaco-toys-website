import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { withTranslation } from '../../i18n'

const Contact = ({ t, isRTL }) => {
    return (
        <section id="contact">
            <div className="grid-2">
                <ScrollAnimation animateIn='fadeInUp'>
                    <div>
                        <form>
                            <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#CCCCCC', borderRadius: 20, padding: 20 }}>
                                <input type="email" name="email" placeholder={`${t('email')}*`} style={{ marginBottom: 20 }} />
                                <textarea name="message" rows="6" placeholder={`${t('message')}*`} style={{ marginBottom: 20 }}></textarea>
                                <input type="button" value={t('send_message')} />
                            </div>
                        </form>
                    </div>
                </ScrollAnimation>

                <div>
                    <ScrollAnimation animateIn='fadeInUp'>
                        <h4>{t('saudi_arabia')}</h4>

                        <div style={{ display: 'flex', marginBottom: 11 }}>
                            <i className="fas fa-map-marker-alt"></i>
                            <p>{t('al_safa_district3___')}  {t('po_box_21463')}</p>
                        </div>
                        <div style={{ display: 'flex', marginBottom: 11 }}>
                            <i className="fas fa-phone"></i>
                            <p>+966 12 6938496</p>
                        </div>
                        <div style={{ display: 'flex', marginBottom: 11 }}>
                            <i className="fas fa-envelope"></i>
                            <p>toy@samaco.com.sa</p>
                        </div>
                    </ScrollAnimation>

                    <hr />
                    <ScrollAnimation animateIn='fadeInUp'>
                        <h4>{t('dubai_uae')}</h4>

                        <div style={{ display: 'flex', marginBottom: 11 }}>
                            <i className="fas fa-map-marker-alt"></i>
                            <p>{t('33rd_floor___')}  {t('po_box_29244')}</p>
                        </div>
                        <div style={{ display: 'flex', marginBottom: 11 }}>
                            <i className="fas fa-phone"></i>
                            <p>+971 4 4421888 </p>
                        </div>
                        <div style={{ display: 'flex', marginBottom: 11 }}>
                            <i className="fas fa-envelope"></i>
                            <p>Info@firstgroupintl.com</p>
                        </div>

                        <ScrollAnimation animateIn='fadeInUp'>
                            <div id="alNahla" style={{ display: 'flex', marginTop: 40 }}>
                                <a href="https://www.alnahlagroup.com/" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/img/alnahla-logo.png"
                                        alt="AlNahla Group"
                                        onMouseOver={e => e.currentTarget.src = "/img/alnahla-logo-c.png"}
                                        onMouseOut={e => e.currentTarget.src = "/img/alnahla-logo.png"} />
                                </a>
                                <a href="https://www.alnahlagroup.com/" target="_blank" rel="noopener noreferrer"><p style={{ fontSize: 28, marginLeft: isRTL ? 0 : 30, marginRight: isRTL ? 30 : 0 }}>{t('part_of')} {t('al_nahla_group')}</p></a>
                            </div>
                        </ScrollAnimation>
                    </ScrollAnimation>
                </div>
            </div>

            <ScrollAnimation animateIn='fadeInUp'>
                <div className='copy_right' style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                    <p style={{ fontSize: 12 }}>{t('copy_right')} <a href="https://innovant.studio/" style={{ color: '#EFB71C' }}>InnovAnt</a></p>
                </div>
            </ScrollAnimation>

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
                    margin-bottom: 15px;
                }

                p { 
                    font-size: 20px; 
                }

                i {
                    color: #847F7F;
                    font-size: 25px;
                    margin-right: ${isRTL ? '0px' : '20px'};
                    margin-left: ${isRTL ? '20px' : '0px'};
                }

                hr {
                    margin: 20px 0px;
                }

                @media only screen and (max-width: 1600px) {
                    h4 {
                        font-size: 30px;
                    }

                    p {
                        font-size: 16px;
                    }

                    #alNahla img {
                        width: 71px;
                        height: 80px;
                        object-fit: contain;
                    }

                    #alNahla p {
                        font-size: 24px !important;
                    }

                    input, textarea {
                        font-size: 16px;
                        padding: 15px;
                    }

                    .copy_right {
                        margin-bottom: 180px;
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

                    .copy_right {
                        margin-bottom: 180px;
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
