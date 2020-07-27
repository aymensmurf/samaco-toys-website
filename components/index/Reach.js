import React from 'react'
import { i18n, withTranslation } from '../../i18n'

const Reach = ({ t }) => {
    return (
        <section id="reach">
            <h2 style={{ marginBottom: 60, marginTop: 200, }}>
                {t('we_reach')} <span style={{ color: '#EFB71C' }}>{t('every_city')}</span> {t('in_saudi_arabia___')}
            </h2>

            <style jsx>{`
                section {
                    background-image: url(/img/sections/reach.png);
                    background-position:center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    // background-attachment: fixed;
                    justify-content: flex-start;
                }
            `}</style>
        </section>
    )
}

Reach.getInitialProps = async () => ({
    namespacesRequired: ['reach'],
})

export default withTranslation('reach')(Reach)
