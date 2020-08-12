import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { withTranslation } from '../../i18n'

const CEO = ({ t, isRTL }) => {
    return (
        <section id="ceo">
            <div className="founder_grid">
                <div>
                    <ScrollAnimation animateIn='fadeInUp'>
                        <h2 style={{ marginBottom: 40 }}>
                            <span style={{ color: '#EFB71C' }}>{t('ms_abeer_ibrahim_sharbatly')}</span> {t('ceo_toys_leisure_division')}
                        </h2>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeInUp'>
                        <p>{t('inspired_by_her_father')}</p>
                    </ScrollAnimation>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', height: '100%' }}>
                    <ScrollAnimation animateIn='fadeInUp'>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src="/img/sections/ceo-special.png" alt="Ms Abeer IBRAHIM Sharbatly" />
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

CEO.getInitialProps = async () => ({
    namespacesRequired: ['ceo'],
})

export default withTranslation('ceo')(CEO)
