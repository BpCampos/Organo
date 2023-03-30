import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <a href='facebook.com' target='_blank'><img src="/images/fb.png" alt=''></img></a>
                <a href='twitter.com' target='_blank'><img src='/images/tw.png' alt=''></img></a>
                <a href='instagram.com' target='_blank'><img src='/images/ig.png' alt=''></img></a>
            </div>
            <div className='details'>
                <img src='/images/logo.png' alt=''></img>
                <p>Desenvolvido por Alura</p>
            </div>
        </div>
    )
}

export default Footer