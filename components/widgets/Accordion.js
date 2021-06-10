import React, { useState } from 'react'

const Accordion = ({ q, a }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <div style={{ marginTop: 10 }}>
                <div className="accordion-header" onClick={() => setCollapsed(!collapsed)}>
                    <p>{q}</p>
                    <i className="fas fa-plus"></i>
                </div>

                <div className="accordion-body">
                    {a}
                </div>
            </div>

            <hr />

            <style jsx>{`
                .accordion-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                }

                .accordion-body {
                    margin-top: 14px;
                    padding: 0px 50px;
                    overflow: hidden;
                    max-height: ${collapsed ? '200px' : '0px'};
                    transition: max-height 300ms ease;
                }

                p {
                    font-size: 25px;
                    color: ${collapsed ? '#EFB71C' : '#fff'};
                    transition: color 300ms ease;
                }

                i {
                    color: ${collapsed ? '#EFB71C' : '#fff'};
                    transform: rotate(${collapsed ? '45deg' : '0deg'});
                    transition: transform 600ms ease, color 300ms ease;
                }

                hr {
                    opacity: .2;
                }

                @media only screen and (max-width: 1439px){
                    p {
                        font-size: 18px;
                    }
                }

                @media only screen and (max-width: 767px){
                    .accordion-body {
                        height: ${collapsed ? '260px' : '0px'};
                    }
                }
            `}</style>
        </>
    )
}

export default Accordion
