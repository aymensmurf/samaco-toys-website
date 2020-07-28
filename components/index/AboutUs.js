import React from 'react'
import { withTranslation } from '../../i18n'

const AboutUs = ({ t, isRTL }) => {
    return (
        <section id="about-us">
            <h2 style={{ marginBottom: 55 }}>
                <span style={{ color: '#EFB71C' }}>{t('samaco_toys_leisure')}</span> - {t('founding_company_toys_industry')}
            </h2>

            <div className='grid-2' style={{ marginBottom: 60, }}>
                <p>{t('we_have')} <span style={{ color: '#EFB71C' }}>{t('over_four_decades')}</span> {t('long_experience')}</p>

                <p><span style={{ color: '#EFB71C' }}>{t('first_group_international')}</span> {t('initialted_vision_expand')}</p>
            </div>

            <h4 style={{marginBottom: 15}}>{t('established')}</h4>

            <div className='about-us-grid-3'>
                <Item title={t('year')} value='1975' />
                <Item title={t('by')} value={t('al_nahla_group')} />
                <Item title={t('in')} value={t('jeddah_saudi_arabia')} />
            </div>

            <style jsx>{`
                section {
                    background-image: url(/img/sections/about-us.jpg);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-attachment: fixed;
                }

                h4 {
                    color: #EFB71C;
                }

                .about-us-grid-3 {
                    display: grid;
                    grid-column-gap: 100px;
                    grid-row-gap: 20px;
                    grid-template-columns: auto auto auto;
                }

                @media only screen and (max-width: 750px) {
                    .about-us-grid-3 {
                        grid-template-columns: auto;
                    }
                }
            `}</style>
        </section>
    )
}

AboutUs.getInitialProps = async () => ({
    namespacesRequired: ['about-us'],
})

export default withTranslation('about-us')(AboutUs)


export const Item = ({ title, value }) => {
    return (
        <div>
            <h4>{title}:</h4>
            <h4 style={{ color: '#EFB71C', fontWeight: 600 }}>{value}</h4>
        </div>
    )
}

