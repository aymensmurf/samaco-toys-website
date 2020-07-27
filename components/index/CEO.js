import React from 'react'
import { i18n, withTranslation } from '../../i18n'

const CEO = ({ t }) => {
    return (
        <section id="ceo">
            <div style={{ width: '60%' }}>
                <h2 style={{ marginBottom: 40, width: '60%' }}>
                    <span style={{ color: '#EFB71C' }}>{t('ms_abeer_ibrahim_sharbatly')}</span> {t('ceo_toys_leisure_division')}
                </h2>

                <p>{t('inspired_by_her_father')}</p>
            </div>

            <style jsx>{`
                section {
                    background-image: url(/img/sections/ceo.png);
                    background-position: bottom right;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-attachment: fixed;
                }
            `}</style>
        </section>
    )
}

CEO.getInitialProps = async () => ({
    namespacesRequired: ['ceo'],
})

export default withTranslation('ceo')(CEO)
