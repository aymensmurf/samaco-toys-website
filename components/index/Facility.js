import React from 'react'

const Facility = () => {
    return (
        <section>
            <a id="facility" />

            <div style={{ width: '60%' }}>
                <h2 style={{ marginBottom: 60 }}>
                    <span style={{ color: '#EFB71C' }}>Fully equipped</span> head office in Jeddah, Saudi Arabia.
                </h2>

                <p style={{ marginBottom: 30 }}>With a fully equipped Head Office based in Jeddah, Saudi Arabia and a branch office in Riyadh to serve the Central and Eastern regions of the Kingdome. While we do the rest of our GCC operation from our GCC Headquarters in Dubai, UAE. </p>

                <p>Our efficiently managed Warehouses in Jeddah, Riyadh and Dubai with a capacity of 40,000Sq meters, operate effectively throughout the region as per each retailer’s requirement with a grand fleet of distribution vehicles to deliver the merchandise to every city in Saudi Arabia, UAE, Oman, Kuwait and Bahrain.</p>
            </div>

            <style jsx>{`
                section {
                    background-image: url(/img/sections/facility.png);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-attachment: fixed;
                }
            `}</style>
        </section>
    )
}

export default Facility
