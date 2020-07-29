import React from 'react'
import YouTube from 'react-youtube'

import { withTranslation } from '../../i18n'
import Album from '../widgets/album'
import { ALBUMS, VIDEOS } from '../../utils/consts'

const Media = ({ t, isRTL }) => {
    return (
        <section id="media">
            <h2>{t('pictures')}</h2>
            <div style={{ marginTop: 30, display: 'flex', flexWrap: 'wrap' }}>
                {ALBUMS.map(({ title, bgImage, images }, i) => <Album key={i} title={title} images={images} bgImage={bgImage} isRTL={isRTL} />)}
            </div>

            <h2 style={{ marginTop: 80 }}>{t('videos')}</h2>
            <div style={{ marginTop: 30, display: 'flex', flexWrap: 'wrap' }}>
                {VIDEOS.map((id, i) =>
                    <div key={i} className="video">
                        <YouTube videoId={id} containerClassName={"youtubeContainer"} />
                    </div>
                )}
            </div>

            <style jsx>{`
                h2 {
                    color: #EFB71C;
                }

                .video {
                    margin-bottom: 15px;
                    margin-right: 15px;
                }
            `}</style>
        </section>
    )
}

Media.getInitialProps = async () => ({
    namespacesRequired: ['media'],
})

export default withTranslation('media')(Media)
