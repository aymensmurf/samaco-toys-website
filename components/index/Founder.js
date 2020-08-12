import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { withTranslation } from '../../i18n'

const Founder = ({ t, isRTL }) => {
    return (
        <section id="founder">
                <div className="founder_grid">
                    <div>
                        <ScrollAnimation animateIn='fadeInUp'>
                            <h2 style={{ marginBottom: 40 }}>
                                <span style={{ color: '#EFB71C' }}>{t('mr_ibrahim_hassan_sharbatly')}</span> {t('founder_samcao_first_group')}
                            </h2>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeInUp'>
                            <p>{t('founder_samaco')}</p>
                        </ScrollAnimation>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', height: '100%' }}>
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
                .founder_grid {
                    display: grid;
                    grid-column-gap: 40px;
                    grid-row-gap: 40px;
                    grid-template-columns: 60% 40%;

                    height: 100%;
                }

                img {
                    width: 100%;
                    object-fit: contain;
                }

                @media only screen and (max-width: 768px) {
                    .founder_grid {
                        grid-template-columns: auto;
                    }
                }
            `}</style>
        </section>
    )
}

Founder.getInitialProps = async () => ({
    namespacesRequired: ['founder'],
})

export default withTranslation('founder')(Founder)

