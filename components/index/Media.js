import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import YouTube from 'react-youtube'

import { withTranslation } from '../../i18n'
import Album from '../widgets/Album'
import { ALBUMS, VIDEOS } from '../../utils/consts'

const Media = ({ t, isRTL }) => {
    return (
        <section id="media">
            <ScrollAnimation animateIn='fadeInUp'>
                <h2>{t('pictures')}</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp'>
                <div className='grid_media' style={{ marginTop: 30, display: 'flex', flexWrap: 'wrap' }}>
                    {ALBUMS.map(({ title, bgImage, images }, i) => <Album key={i} title={title} images={images} bgImage={bgImage} isRTL={isRTL} />)}
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInUp'>
                <h2 style={{ marginTop: 50 }}>{t('videos')}</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp'>
                <div className='grid_media' style={{ marginTop: 30, marginBottom: 70 }}>
                    {VIDEOS.map((id, i) =>
                        <div key={i} className="video">
                            <YouTube videoId={id} containerClassName={"youtubeContainer"} />
                        </div>
                    )}
                </div>
            </ScrollAnimation>

            <style jsx>{`
                h2 {
                    color: #EFB71C;
                    font-size: 50px;
                }

                .grid_media {
                    display: grid;
                    grid-column-gap: 15px;
                    grid-row-gap: 15px;
                    grid-template-columns: repeat(3, 1fr);
                }

                @media only screen and (max-width: 1023px) {
                    .grid_media {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media only screen and (max-width: 699px) {
                    .grid_media {
                        grid-template-columns: auto;
                    }
                }
            `}</style>
        </section>
    )
}

Media.getInitialProps = async () => ({
    namespacesRequired: ['media'],
})

export default withTranslation('media')(Media)
