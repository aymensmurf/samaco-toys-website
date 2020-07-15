import React from 'react'

const AboutUs = () => {
    return (
        <section>
            <a id="about-us" />

            <h2 style={{ marginBottom: 55 }}>
                <span style={{ color: '#EFB71C' }}>SAMACO Toys & Leisure</span> - A founding company of the toys Industry in the GCC.
            </h2>

            <div style={{ display: 'flex', marginBottom: 60 }}>
                <p style={{ marginRight: 40 }}>We have <span style={{ color: '#EFB71C' }}>over four-decades</span> of long experience in GCC market. Our commitment to bring nothing but the best into our territory has made our partner brands the category leaders in GCC market.</p>

                <p><span style={{ color: '#EFB71C' }}>First Group International</span> was initiated on our vision to expand beyond borders to consistently gain market share while focusing on brand exposure throughout the Middle East, Africa and Europe.</p>
            </div>

            <h4 style={{ marginBottom: 20 }}>Established</h4>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Item title='year' value='1975' />
                <Item title='by' value='Al Nahla Group' />
                <Item title='in' value='Jeddah, Saudi Arabia' />
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
            `}</style>
        </section>
    )
}

export default AboutUs


export const Item = ({ title, value }) => {
    return (
        <div>
            <h4>{title}:</h4>
            <h4 style={{ color: '#EFB71C', fontWeight: 600 }}>{value}</h4>
        </div>
    )
}

