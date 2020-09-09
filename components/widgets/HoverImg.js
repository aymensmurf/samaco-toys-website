import React from 'react'
import PropTypes from 'prop-types'

const HoverImg = ({title, type}) => {
    let src = '';
    
    if (type === 'brands'){
        src = '/img/brands/' + title
    }else{
        src = '/img/customers/' + title
    }

    return (
        <>
            <img
                src={src + '.svg'}
                alt={title.replace('-', ' ').toUpperCase()}
                onMouseOver={e => e.currentTarget.src = src + '-c.svg'}
                onMouseOut={e => e.currentTarget.src = src + '.svg'} />

            <style jsx>{`
                img {
                    width: 160px;
                    object-fit: contain;
                    cursor: pointer;
                }

                @media only screen and (max-width: 1600px) {
                    img {
                        width: 130px;
                    }
                }
                
                @media only screen and (max-width: 599px) {
                    img {
                        width: 100px;
                    }
                }
            `}</style>
        </>
    )
}

HoverImg.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string
}

HoverImg.defaultProps = {
    type: 'brands'
}

export default HoverImg
