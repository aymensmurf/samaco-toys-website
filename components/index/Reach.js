import React from 'react'

const Reach = () => {
    return (
        <section>
            <a id="reach" />

            <h2 style={{ marginBottom: 60, marginTop: 200, }}>
                We reach <span style={{ color: '#EFB71C' }}>every city</span> in Saudi Arabia, UAE, Oman, Kuwait and Bahrain.
            </h2>

            <style jsx>{`
                section {
                    background-image: url(/img/sections/reach.png);
                    background-position:center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    // background-attachment: fixed;
                    justify-content: flex-start;
                }
            `}</style>
        </section>
    )
}

export default Reach
