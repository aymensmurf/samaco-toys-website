import React from 'react'
import { withTranslation } from '../../i18n'

const CEO = ({ t, isRTL }) => {
    return (
        <section id="ceo">
            <div className="hide-special" style={{ width: '60%' }}>
                <h2 style={{ marginBottom: 40 }}>
                    <span style={{ color: '#EFB71C' }}>{t('ms_abeer_ibrahim_sharbatly')}</span> {t('ceo_toys_leisure_division')}
                </h2>

                <p>{t('inspired_by_her_father')}</p>
            </div>

            <div className="display-special">
                <h2 style={{ marginBottom: 40 }}>
                    <span style={{ color: '#EFB71C' }}>{t('ms_abeer_ibrahim_sharbatly')}</span> {t('ceo_toys_leisure_division')}
                </h2>

                <div className="grid-2-special">
                    <div>
                        <p>{t('inspired_by_her_father')}</p>
                    </div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src="/img/sections/ceo-special.png" alt="Mr. Ibrahim Hassan Sharbatly" />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                section {
                    background-image: ${isRTL ? 'url(/img/sections/ceo-rtl.png)' : 'url(/img/sections/ceo.png)'};
                    background-position: ${isRTL ? 'bottom left' : 'bottom right'};
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                .display-special img {
                    width: 100%;
                    object-fit: contain;
                }

                .grid-2-special {
                    display: grid;
                    grid-column-gap: 40px;
                    grid-row-gap: 40px;
                    grid-template-columns: auto auto;
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
        </section>
    )
}

CEO.getInitialProps = async () => ({
    namespacesRequired: ['ceo'],
})

export default withTranslation('ceo')(CEO)
