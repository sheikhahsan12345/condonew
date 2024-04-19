import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import '../../Assets/CustomStyles/index.css';
import port1 from '../../images/portfolio/web/Website-Development-01-01.jpg';
import port2 from '../../images/portfolio/web/Website-Development-03-03.jpg';
import port3 from '../../images/portfolio/web/Website-Development-04-04.jpg';
import port4 from '../../images/portfolio/web/Website-Development-05-05.jpg';
import port5 from '../../images/portfolio/web/Website-Development-06-06.jpg';
import port6 from '../../images/portfolio/web/Website-Development-07-07.jpg';
import port7 from '../../images/portfolio/web/1.png';
import port8 from '../../images/portfolio/web/2.png';
import port9 from '../../images/portfolio/web/3.png';
import ecom1 from '../../images/portfolio/ecom/1.jpg';
import ecom2 from '../../images/portfolio/ecom/2.jpg';
import ecom3 from '../../images/portfolio/ecom/3.jpg';
import ecom4 from '../../images/portfolio/ecom/4.jpg';
import ecom5 from '../../images/portfolio/ecom/5.jpg';
import ecom6 from '../../images/portfolio/ecom/6.jpg';
import ecom7 from '../../images/portfolio/ecom/7.jpg';
import ecom8 from '../../images/portfolio/ecom/8.jpg';
import ecom9 from '../../images/portfolio/ecom/9.jpg';
import video1 from '../../images/portfolio/videos/1.png';
import video2 from '../../images/portfolio/videos/2.png';
import video3 from '../../images/portfolio/videos/3.png';
import video4 from '../../images/portfolio/videos/4.png';
import video5 from '../../images/portfolio/videos/5.png';
import video6 from '../../images/portfolio/videos/6.png';
import branding1 from '../../images/portfolio/branding/1.jpg';
import branding2 from '../../images/portfolio/branding/2.jpg';
import branding3 from '../../images/portfolio/branding/3.jpg';
import branding4 from '../../images/portfolio/branding/4.jpg';
import branding5 from '../../images/portfolio/branding/5.jpg';
import branding6 from '../../images/portfolio/branding/6.jpg';
import branding7 from '../../images/portfolio/branding/7.jpg';
import branding8 from '../../images/portfolio/branding/8.jpg';
import mobile1 from '../../images/portfolio/mobile/mobile-01.jpg';
import mobile2 from '../../images/portfolio/mobile/mobile-02.jpg';
import mobile3 from '../../images/portfolio/mobile/mobile-03.jpg';
import mobile4 from '../../images/portfolio/mobile/mobile-04.jpg';
import mobile5 from '../../images/portfolio/mobile/mobile-05.jpg';
import mobile6 from '../../images/portfolio/mobile/mobile-06.jpg';
import mobile7 from '../../images/portfolio/mobile/mobile-07.jpg';
import mobile8 from '../../images/portfolio/mobile/mobile-08.jpg';
import mobile9 from '../../images/portfolio/mobile/1.png';
import mobile10 from '../../images/portfolio/mobile/2.png';
import mobile11 from '../../images/portfolio/mobile/3.png';
import mobile12 from '../../images/portfolio/mobile/4.png';



const Portfolio = () => {
    const portfoliolist = [port1, port2, port3, port4, port5, port6, port7, port8, port9];
    const portfoliolist1 = [ecom1, ecom2, ecom3, ecom4, ecom5, ecom6, ecom7, ecom8, ecom9];
    const videos = [video1, video2, video3, video4, video5, video6];
    const branding = [branding1, branding2, branding3, branding4, branding5, branding6, branding7, branding8];
    const mobile = [mobile1,mobile2,mobile3,mobile4,mobile5,mobile6,mobile7,mobile8,mobile9,mobile10,mobile11,mobile12] 
    const [activeTarget, setActiveTarget] = useState('tab1');

    const handleItemClick = (event, target) => {
        event.preventDefault();
        setActiveTarget(target);

    };



    return (
        <>
            <div className="portfoliosec">
                <Container fluid>
                    <div className="portfoliotext">
                        <h3>See Our Work</h3>
                        <p>Our work is a testament to our expertise. It speaks aloud in respect of e-commerce, web and mobile application, SEO, Google ad words and email marketing, branding and social media marketing. It demonstrates the caliber of value achieved for businesses like yours.</p>
                    </div>

                    <div className="portfoliolist">
                        <ul>
                            <li><a href="tab1" data-target="tab1" className={activeTarget === 'tab1' ? 'active' : ''} onClick={(event) => handleItemClick(event, 'tab1')}>Website Development</a></li>
                            <li><a href="tab2" data-target="tab2" className={activeTarget === 'tab2' ? 'active' : ''} onClick={(event) => handleItemClick(event, 'tab2')}>Ecommerce</a></li>
                            <li><a href="tab3" data-target="tab3" className={activeTarget === 'tab3' ? 'active' : ''} onClick={(event) => handleItemClick(event, 'tab3')}>Animations</a></li>
                            <li><a href="tab4" data-target="tab4" className={activeTarget === 'tab4' ? 'active' : ''} onClick={(event) => handleItemClick(event, 'tab4')}>Branding</a></li>
                            <li><a href="tab5" data-target="tab5" className={activeTarget === 'tab5' ? 'active' : ''} onClick={(event) => handleItemClick(event, 'tab5')}>Mobile Applications</a></li>
                        </ul>
                    </div>
                    <div className="tabcontent">
                        <div className="tabox" id="tab1" style={{ display: activeTarget === 'tab1' ? 'block' : 'none' }}>
                            <ul className="portfoliolisting">
                                {
                                    portfoliolist.map((value, index) => {
                                        return (
                                            <li key={index} className="border-box-effect">
                                                <a href={value} >
                                                    <img src={value} alt="img" />
                                                </a>
                                            </li>

                                        );

                                    })

                                }
                            </ul>
                        </div>
                        <div className="tabox" id="tab2" style={{ display: activeTarget === 'tab2' ? 'block' : 'none' }}>
                            <ul className="portfoliolisting">
                                {
                                    portfoliolist1.map((value, index) => {

                                        return (
                                            <li key={index} className="border-box-effect">
                                                <a href={value} >
                                                    <img src={value} alt="img" />
                                                </a>
                                            </li>

                                        );

                                    })

                                }

                            </ul>

                        </div>
                        <div className="tabox" id="tab3" style={{ display: activeTarget === 'tab3' ? 'block' : 'none' }}>
                            <ul className="portfoliolisting">

                                {
                                    videos.map((value, index) => {

                                        return (
                                            <li key={index} className="border-box-effect no_hover">
                                                <a href={value} >
                                                    <img src={value} alt="img" />
                                                </a>
                                            </li>

                                        )


                                    })
                                }

                            </ul>
                        </div>
                        <div className="tabox" id="tab4" style={{ display: activeTarget === 'tab4' ? 'block' : 'none' }}>
                            <ul className="portfoliolisting">

                                {
                                    branding.map((value, index) => {

                                        return (

                                            <li key={index} className="border-box-effect no_hover">
                                                <a href={value} >
                                                    <img src={value} alt="img" />
                                                </a>
                                            </li>


                                        )

                                    })

                                }


                            </ul>
                        </div>
                        <div className="tabox" id="tab5" style={{ display: activeTarget === 'tab5' ? 'block' : 'none' }}>
                        <ul className="portfoliolisting">
                            {

                                mobile.map((value,index)=>{
                                 
                                 return(
                                 
                                    <li key={index} className="border-box-effect no_hover">
                                                <a href={value} >
                                                    <img src={value} alt="img" />
                                                </a>
                                            </li>

                                 );


                                }) 
                            }
                        </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Portfolio;
