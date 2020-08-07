import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { withTranslation } from '../../i18n'

const Founder = ({ t, isRTL }) => {
    return (
        <section id="founder">
            <div className="hide-special" style={{ width: '60%' }}>
                <ScrollAnimation animateIn='fadeInUp'>
                    <h2 style={{ marginBottom: 40 }}>
                        <span style={{ color: '#EFB71C' }}>{t('mr_ibrahim_hassan_sharbatly')}</span> {t('founder_samcao_first_group')}
                    </h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp'>
                    <p>{t('founder_samaco')}</p>
                </ScrollAnimation>
            </div>

            <div className="display-special">
                <ScrollAnimation animateIn='fadeInUp'>
                    <h2 style={{ marginBottom: 40 }}>
                        <span style={{ color: '#EFB71C' }}>{t('mr_ibrahim_hassan_sharbatly')}</span> {t('founder_samcao_first_group')}
                    </h2>
                </ScrollAnimation>

                <div className="grid-2-special">
                    <ScrollAnimation animateIn='fadeInUp'>
                        <div>
                            <p>{t('founder_samaco')}</p>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeInUp'>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src="/img/sections/founder-special.png" alt="Mr. Ibrahim Hassan Sharbatly" />
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            <style jsx>{`
                section {
                    background-image: ${isRTL ? 'url(/img/sections/founder-rtl.png)' : 'url(/img/sections/founder.png)'};
                    background-position: ${isRTL ? 'bottom left' : 'bottom right'};
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                .display-special img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    background-color:red;
                }

                .grid-2-special {
                    display: grid;
                    grid-row-gap: 40px;
                    grid-template-columns: 60% 40%;
                }

                @media only screen and (max-width: 1490px) {
                    section {
                        background-image: none !important;
                    }
                }

                @media only screen and (max-width: 768px) {
                    .grid-2-special {
                        grid-template-columns: auto;
                    }
                }
            `}</style>
        </section >
    )
}
Founder.getInitialProps = async () => ({
    namespacesRequired: ['founder'],
})

export default withTranslation('founder')(Founder)






