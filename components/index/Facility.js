import React from 'react'
import { i18n, withTranslation } from '../../i18n'

const Facility = ({ t }) => {
    return (
        <section id="facility">
            <div style={{ width: '60%' }}>
                <h2 style={{ marginBottom: 60 }}>
                    <span style={{ color: '#EFB71C' }}>{t('fully_equipped')}</span> {t('head_office_jeddah___')}
                </h2>

                <p style={{ marginBottom: 30 }}>{t('with_fully_equipped___')}</p>

                <p>{t('our_facility_managed___')}</p>
            </div>

            <style jsx>{`
                section {
                    background-image: url(/img/sections/facility.png);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-attachment: fixed;
                }
            `}</style>
        </section>
    )
}

Facility.getInitialProps = async () => ({
    namespacesRequired: ['facility'],
})

export default withTranslation('facility')(Facility)
