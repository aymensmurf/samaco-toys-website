import React, { useState, useEffect } from 'react'
import { i18n, withTranslation } from '../../i18n'

const Philosophy = ({ t }) => {

    let missions = [
        t('morals'),
        t('vision'),
        t('leadership'),
        t('community_service'),
        t('integrity'),
        t('empowerment'),
        t('consultation'),
    ]

    return (
        <section id="philosophy">
            <div style={{ display: 'grid', gridColumnGap: 100, gridTemplateColumns: '66% 34%' }}>
                <div>
                    <div style={{ marginBottom: 50 }}>
                        <h3>{t('our_vision')}</h3>
                        <p>{t('the_premier_kids___')}</p>
                    </div>

                    <div>
                        <h3>{t('our_mission')}</h3>
                        <p>{t('deliver_high_quality___')}</p>
                        <p>{t('we_belive_toys___')}</p>
                    </div>
                </div>

                <div>
                    <h3>{t('our_value')}</h3>
                    <div>
                        {
                            missions.map((elm, i) => <Item key={i} id={i} title={elm} length={missions.length} />)
                        }
                    </div>
                </div>
            </div>

            <style jsx>{`
                h3 {
                    color: #EFB71C;
                    margin-bottom: 10px;
                }
            `}</style>
        </section>
    )
}

Philosophy.getInitialProps = async () => ({
    namespacesRequired: ['philosophy'],
})

export default withTranslation('philosophy')(Philosophy)

const Item = ({ id, title, length }) => {
    const [index, setIndex] = useState(-1)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (index < length) {
                setIndex(index + 1)
            } else {
                setIndex(0)
            }
        }, 1000)
        return () => clearTimeout(timer);
    });



    return (
        <div style={{
            maxWidth: 350, backgroundColor: (id === index) ? '#EFB71C' : 'transparent', marginBottom: 10, padding: '10px 30px', borderRadius: 9
        }}>
            <p style={{ color: (id === index) ? '#2D4375' : '#fff' }}>{title}</p>
        </div >
    )
}

