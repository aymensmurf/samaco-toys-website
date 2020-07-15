import React from 'react'

const Team = () => {
    return (
        <section>
            <a id="team" />

            <h2 style={{ marginTop: 200, marginBottom: 120 }}>
                We are a<span style={{ color: '#EFB71C' }}> multi-cultural company.</span>
            </h2>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 150 }}>
                <div className='team-grid'>
                    <Item
                        name='Yasser Tamar'
                        position='General Manager'
                        pic='yasser-tamar'
                    />
                    <Item
                        name='Ahmed Derham'
                        position='Sales Manager'
                        pic='ahmed-derham'
                    />
                    <Item
                        name='Mazher Khan'
                        position='Marketing Manager'
                        pic='mazher-khan'
                    />
                    <Item
                        name='Anas Vadakkengara'
                        position='CEO Assistant'
                        pic='anas-vadakkengara'
                    />
                    <Item
                        name='Alaa Abu Alhasan'
                        position='Sales Devel. Manager'
                        pic='alaa-abu-alhasan'
                    />
                    <Item
                        name='Khunji Erukat'
                        position='INTEX Manager'
                        pic='khunji-erukat'
                    />
                    <Item
                        name='Ahmed Abdoun'
                        position='Finance Manager'
                        pic='ahmed-abdoun'
                    />
                    <Item
                        name='Muhammad Islam'
                        position='Procurement Manager'
                        pic='muhammad-islam'
                    />
                    <Item
                        name='Abdu Ahmed Utif'
                        position='Administrative Officer'
                        pic='abdu-ahmed-utif'
                    />
                </div>
            </div>

            <style jsx>{`
                .team-grid {
                    display: grid;
                    grid-column-gap: 60px;
                    grid-row-gap: 60px;
                    grid-template-columns: auto auto auto;
                }
            `}</style>
        </section>
    )
}

const Item = ({ name, position, pic }) => {
    return (
        <div className="avatar-bg">
            <div>
                <p>{name}</p>
                <p style={{ fontSize: 25 }}>{position}</p>
            </div>

            <style jsx>{`
                .avatar-bg {
                    background-image: url(/img/team/${pic}.png);
                    background-position: bottom right;
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 554px;
                    width: 349px;
                    padding: 33px;
                    display: flex;
                    align-items: flex-end;
                    border-radius: 22px;
                }
            `}</style>
        </div>
    )
}

export default Team
