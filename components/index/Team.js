import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { withTranslation } from '../../i18n'

const Team = ({ t }) => {
    return (
        <section id="team">
            <ScrollAnimation animateIn='fadeInUp'>
                <h2 style={{ marginBottom: 60 }}>
                    {t('we_are')}<span style={{ color: '#EFB71C' }}> {t('multi_cultural_company')}</span>
                </h2>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInUp'>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 150 }}>
                    <div className='team-grid'>
                        <Item
                            name={t('yasser_tamar')}
                            position={t('yasser_tamar_pos')}
                            pic='yasser-tamar'
                        />
                        <Item
                            name={t('mazhar_khan')}
                            position={t('mazhar_khan_pos')}
                            pic='mazher-khan'
                        />
                        <Item
                            name={t('ahmed_abdoun')}
                            position={t('ahmed_abdoun_pos')}
                            pic='ahmed-abdoun'
                        />
                        <Item
                            name={t('muhammad_islam')}
                            position={t('muhammad_islam_pos')}
                            pic='muhammad-islam'
                        />
                        <Item
                            name={t('anas_vadakkengara')}
                            position={t('anas_vadakkengara_pos')}
                            pic='anas-vadakkengara'
                        />
                        <Item
                            name={t('alaa_abu_alhassan')}
                            position={t('alaa_abu_alhassan_pos')}
                            pic='alaa-abu-alhasan'
                        />
                        <Item
                            name={t('khunji_erukat')}
                            position={t('khunji_erukat_pos')}
                            pic='khunji-erukat'
                        />
                        <Item
                            name={t('abdu_ahmed_utif')}
                            position={t('abdu_ahmed_utif_pos')}
                            pic='abdu-ahmed-utif'
                        />
                    </div>
                </div>
            </ScrollAnimation>

            <style jsx>{`
                .team-grid {
                    display: grid;
                    grid-column-gap: 60px;
                    grid-row-gap: 60px;
                    grid-template-columns: auto auto auto;
                }

                @media only screen and (max-width: 768px) {
                    .team-grid {
                        grid-template-columns: auto auto;
                    }
                }
                
                @media only screen and (max-width: 699px) {
                    .team-grid {
                        grid-template-columns: auto;
                    }
                }
            `}</style>
        </section>
    )
}

Team.getInitialProps = async () => ({
    namespacesRequired: ['team'],
})

export default withTranslation('team')(Team)

const Item = ({ name, position, pic }) => {
    return (
        <div className="avatar-bg">
            <div>
                <p>{name}</p>
                <p style={{ fontSize: 18 }}>{position}</p>
            </div>

            <style jsx>{`
                .avatar-bg {
                    background-image: url(/img/team/${pic}.png);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 400px;
                    width: 80%;
                    padding: 33px;
                    display: flex;
                    align-items: flex-end;
                    border-radius: 22px;
                }                

                @media only screen and (max-height: 760px) {
                    .avatar-bg {
                        height: 300px;
                    }
                }

                @media only screen and (max-width: 600px) {
                    .avatar-bg {
                        height: 350px;
                    }
                }
            `}</style>
        </div>
    )
}

