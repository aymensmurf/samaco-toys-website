import React from 'react'

const CEO = () => {
    return (
        <section>
            <a id="ceo" />

            <div style={{ width: '60%' }}>
                <h2 style={{ marginBottom: 40, width: '60%' }}>
                    <span style={{ color: '#EFB71C' }}>Ms. Abeer IBRAHIM Sharbatly</span> CEO, Toys & Leisure Division
                </h2>

                <p>Inspired by her father’s great entrepreneurial spirit Ms Abeer Sharbatly also joined the family business. Her great passion towards toys lead her way to take over the group’s Toys & Leisure business and has been pursuing it for last 10 years. The extensive knowledge in the toy industry and great dedication towards excellence made her one of the leaders in the industry in the region.</p>
            </div>

            <style jsx>{`
                section {
                    background-image: url(/img/sections/ceo.png);
                    background-position: bottom right;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-attachment: fixed;
                }
            `}</style>
        </section>
    )
}

export default CEO
