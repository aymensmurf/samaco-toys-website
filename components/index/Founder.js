import React from 'react'
import { withTranslation } from '../../i18n'

const Founder = ({ t, isRTL }) => {
    return (
        <section id="founder">
            <div style={{ width: '60%' }}>
                <h2 style={{ marginBottom: 40 }}>
                    <span style={{ color: '#EFB71C' }}>{t('mr_ibrahim_hassan_sharbatly')}</span> {t('founder_samcao_first_group')}
                </h2>

                <div style={{ display: 'flex' }}>
                    <p>{t('founder_samaco')}</p>
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
            `}</style>
        </section>
    )
}
Founder.getInitialProps = async () => ({
    namespacesRequired: ['founder'],
})

export default withTranslation('founder')(Founder)
