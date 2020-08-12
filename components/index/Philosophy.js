import React, { useState, useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { withTranslation } from '../../i18n'

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
            <div className="philosophy_grid">
                <div>
                    <ScrollAnimation animateIn='fadeInUp'>
                        <div style={{ marginBottom: 50 }}>
                            <h3>{t('our_vision')}</h3>
                            <p>{t('the_premier_kids___')}</p>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeInUp'>
                        <div>
                            <h3>{t('our_mission')}</h3>
                            <p>{t('deliver_high_quality___')}</p>
                            <p>{t('we_belive_toys___')}</p>
                        </div>
                    </ScrollAnimation>
                </div>

                <ScrollAnimation animateIn='fadeInUp'>
                    <div>
                        <h3>{t('our_value')}</h3>
                        <div>
                            {
                                missions.map((elm, i) => <Item key={i} id={i} title={elm} length={missions.length} />)
                            }
                        </div>
                    </div>
                </ScrollAnimation>
            </div>

            <style jsx>{`
                h3 {
                    color: #EFB71C;
                    margin-bottom: 10px;
                }

                .philosophy_grid {
                    display: grid;
                    grid-column-gap: 30px;
                    grid-row-gap: 30px;
                    grid-template-columns: 70% auto;
                }

                @media only screen and (max-width: 1023px) {
                    .philosophy_grid{
                        grid-template-columns: auto;
                    }
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

