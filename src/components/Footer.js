import './Footer.css'

function FooterInformation() {
    const sectionInformation = [
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
            {sectionInformation.map((item, index) => (
                <div className="company" key={index}>
                    <div className="title">
                        <h3>{item.title}</h3>
                    </div>
                    {item.content.map((item2, index2) => (
                        <div className="contenCompany" key={index2}>
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