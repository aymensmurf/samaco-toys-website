import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { withTranslation } from '../../i18n'
import { ERETAILERS } from '../../utils/consts'
import Eretailer from './components/Eretailer'

const Eretailers = ({ t }) => {
    const [loadMore, setLoadMore] = useState(false);

    return (
        <section id="eretailers" style={{ paddingBottom: 160 }}>
            <ScrollAnimation animateIn='fadeInUp'>
                <h2>{t('eretailers')}:</h2>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInUp'>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 50 }}>
                    <div className='grid-4'>
                        {
                            ERETAILERS.map((ertailer, i) => {
                                if (i < 8) {
                                    return <Eretailer key={i} title={ertailer.title} link={ertailer.link} />
                                } else {
                                    if (loadMore) {
                                        return <Eretailer key={i} title={ertailer.title} link={ertailer.link} />
                                    }
                                }

                            })
                        }
                    </div>
                </div>

                {ERETAILERS.length > 8 && (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className='btn-load-more' onClick={() => setLoadMore(!loadMore)}>
                            {
                                loadMore ? t('show_less') : `${t('load_more')} (+${ERETAILERS.length - 8} ${t('more_eretailers')})`
                            }
                        </button>
                    </div>
                )}

            </ScrollAnimation>

            <style jsx>{`
                h2 {
                    margin-bottom: 50px;
                }
            `}</style>
        </section>
    )
}

Eretailers.getInitialProps = async () => ({
    namespacesRequired: ['eretailers'],
})

export default withTranslation('eretailers')(Eretailers)
