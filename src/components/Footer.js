import './Footer.css'

function FooterInformation() {
    const information  = [
        {
            title: 'Plataform',
            content: ['About Us', 'Trailers']
        },
        {
            title: 'Company',
            content: ['Terms and Conditions']
        },
        {
            title: 'Social',
            content: ['Facebook']
        },

    ]
    return (
        <>
            {information.map((item, index) => (
                <div key={index} className="company">
                    <div className="title">
                        <h2>{item.title}</h2>
                    </div>
                    {item.content.map((item2, index) => (
                        <div className="contenCompany">
                            <span>
                                {item2}
                            </span>
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}

function CopyRight() {
    return (
        <div className="copyright">
            <span>&copy; Todos los derechos reservados - 2023. </span>
        </div>
    )
}

function FooterC() {
    return (
        <div className="footer-background">
            <div className="description-footer">
                <FooterInformation></FooterInformation>
            </div>
            <div className="cutting-line">
                <hr className='hr-class'></hr>
            </div>
            <CopyRight></CopyRight>
        </div>
    );
}
export default FooterC;