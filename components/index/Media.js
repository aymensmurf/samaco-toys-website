import React from 'react'
import { i18n, withTranslation } from '../../i18n'

const Media = ({ t }) => {
    return (
        <section id="media">
            <h2>{t('pictures')}</h2>

            <h2 style={{ marginTop: 80 }}>{t('videos')}</h2>

            <style jsx>{`
                h2 {
                    color: #EFB71C;
                }
            `}</style>
        </section>
    )
}

Media.getInitialProps = async () => ({
    namespacesRequired: ['media'],
})

export default withTranslation('media')(Media)
