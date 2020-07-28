import React from 'react'
import { i18n, withTranslation } from '../../i18n'

const Facility = ({ t }) => {
    return (
        <section id="facility">
            <div>
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

                div:first-child{
                    width: 60%;
                }

                @media only screen and (max-width: 768px) {
                    div:first-child{
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    )
}

Facility.getInitialProps = async () => ({
    namespacesRequired: ['facility'],
})

export default withTranslation('facility')(Facility)
