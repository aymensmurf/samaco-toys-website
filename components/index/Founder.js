import React from 'react'
import { withTranslation } from '../../i18n'

const Founder = ({ t, isRTL }) => {
    return (
        < section id="founder" >
            <div className="hide-special" style={{ width: '60%' }}>
                <h2 style={{ marginBottom: 40 }}>
                    <span style={{ color: '#EFB71C' }}>{t('mr_ibrahim_hassan_sharbatly')}</span> {t('founder_samcao_first_group')}
                </h2>

                <p>{t('founder_samaco')}</p>
            </div>

            <div className="display-special">
                <div className="grid-2-special">
                    <div>
                        <h2 style={{ marginBottom: 40 }}>
                            <span style={{ color: '#EFB71C' }}>{t('mr_ibrahim_hassan_sharbatly')}</span> {t('founder_samcao_first_group')}
                        </h2>

                        <p>{t('founder_samaco')}</p>
                    </div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src="/img/sections/founder-special.png" alt="Mr. Ibrahim Hassan Sharbatly" />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                section {
                    background-image: ${isRTL ? 'url(/img/sections/founder-rtl.png)' : 'url(/img/sections/founder.png)'};
                    background-position: ${isRTL ? 'bottom left' : 'bottom right'};
                    background-repeat: no-repeat;
                    background-size: cover;
                    // background-attachment: fixed;
                }

                .display-special img {
                    margin-top: 50px;
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
        </section >
    )
}
Founder.getInitialProps = async () => ({
    namespacesRequired: ['founder'],
})

export default withTranslation('founder')(Founder)






