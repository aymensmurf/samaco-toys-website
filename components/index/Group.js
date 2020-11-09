import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { withTranslation } from '../../i18n'

const Group = ({ t }) => {
    return (
        <section id="group">
            <ScrollAnimation animateIn='fadeInUp'>
                <h2 style={{ marginBottom: 60 }}>
                    <span style={{ color: '#EFB71C' }}>{t('title')}</span>
                </h2>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInUp'>
                <p style={{ marginBottom: 60 }}>{t('desc')}</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInUp'>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 150 }}>
                    <div className='team-grid'>
                        <Item
                            name={t('muhammed_1')}
                            position={t('muhammed_1_pos')}
                            pic='muhammed'
                        />
                        <Item
                            name={t('sultan_2')}
                            position={t('sultan_2_pos')}
                            pic='sultan'
                        />
                    </div>
                </div>
            </ScrollAnimation>

            <style jsx>{`
                .team-grid {
                    display: grid;
                    grid-column-gap: 0px;
                    grid-row-gap: 60px;
                    grid-template-columns: 1fr 1fr;
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

Group.getInitialProps = async () => ({
    namespacesRequired: ['group'],
})

export default withTranslation('group')(Group)

const Item = ({ name, position, pic }) => {
    return (
        <div className="avatar-bg">
            <div>
                <p>{name}</p>
                <p style={{ fontSize: 25 }}>{position}</p>
            </div>

            <style jsx>{`
                .avatar-bg {
                    background-image: url(/img/group/${pic}.png);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 400px;
                    width: 60%;
                    max-width: 60%;
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

