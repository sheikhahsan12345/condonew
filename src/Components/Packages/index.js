import React, { useEffect, useState } from "react";
import {Row , Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import DOMPurify from 'dompurify';


const Packages = ()=>{
 const [activeTarget1, setActiveTarget] = useState('web');

    const handleItemClick = (event, target) => {
        event.preventDefault();
        setActiveTarget(target);

    };

    const [Package, setPackages] = useState([]);
    const [Package1, setPackages1] = useState([]);
    const [Package2, setPackages2] = useState([]);
    const [Package3, setPackages3] = useState([]);
    const [Package4, setPackages4] = useState([]);
  

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3010/package/get');
          const data = await response.json();
         
          
          setPackages(data.web);
          setPackages1(data.ecommerce);
          setPackages2(data.video);
          setPackages3(data.seo);
          setPackages4(data.combo);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
    
return(
<>
<div className="packagessec">
  <Container>
    <Row>
      <Col sm={12} xs={12} md={12} lg={12} xl={12}>
      <div className="packagestext">
        <h2>See Our Packages</h2>
      </div>
      <div className="packageslist">
        <ul>
          <li><a href="web"  data-packages="web"  className={activeTarget1 === 'web' ? 'current' : ''} onClick={(event) => handleItemClick(event, 'web')}>Web Design</a></li>
          <li><a href="ecom" data-packages="ecom"  className={activeTarget1 === 'ecom' ? 'current' : ''} onClick={(event) => handleItemClick(event, 'ecom')}>Ecommerce</a></li>
          <li><a href="video" data-packages="video" className={activeTarget1 === 'video' ? 'current' : ''} onClick={(event) => handleItemClick(event, 'video')}>Video Animation</a></li>
          <li><a href="seo" data-packages="seo" className={activeTarget1 === 'seo' ? 'current' : ''} onClick={(event) => handleItemClick(event, 'seo')}>Search Engine Optimization</a></li>
          <li><a href="combo" data-packages="combo" className={activeTarget1 === 'combo' ? 'current' : ''} onClick={(event) => handleItemClick(event, 'combo')}>Combo Packages</a></li>
        </ul>
      </div>
      <div className="packagescontent">

        <div className="packagesbox" id="web" style={{ display: activeTarget1 === 'web' ? 'block' : 'none' }}>
          <div className="packagesmain pkgewrp">
            <Row>
            {
             Package.map((packageItem) => {

   
        return (
        <Col key={packageItem.id} sm={12} xs={12} md={3} lg={3} xl={3}>
          <div className="mainpkge pdng-btm pdng-btm">
            <div className="pkgnam">
              <h4>{packageItem.package_heading}</h4>
              <span>Starting at </span>
            </div>
            <div className="pricewrp">
              <h3>{packageItem.packages_price}</h3>
              <p>Suitable for potential super-startups and brand revamps for companies.</p>
            </div>
            <div className="btnwrp">
              <a href="#" className="btn-pack order-package">
                Start
              </a>
            </div>
            <div className="serwrp">
              <ul
                className="list-scrollpkge"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(packageItem.packages_detail) }}
              ></ul>
            </div>
          </div>
        </Col>
      );
   
  })
}

             
            </Row>
            
          </div>
        </div>
    
        <div className="packagesbox" id="ecom" style={{ display: activeTarget1 === 'ecom' ? 'block' : 'none' }}>
        <div className="packagesmain pkgewrp">
            <Row>
            {
          Package1.map((packageItem) => {
        return (
        <Col key={packageItem.id} sm={12} xs={12} md={3} lg={3} xl={3}>
          <div className="mainpkge pdng-btm pdng-btm">
            <div className="pkgnam">
              <h4>{packageItem.package_heading}</h4>
              <span>Starting at </span>
            </div>
            <div className="pricewrp">
              <h3>{packageItem.packages_price}</h3>
              <p>Suitable for potential super-startups and brand revamps for companies.</p>
            </div>
            <div className="btnwrp">
              <a href="#" className="btn-pack order-package">
                Start
              </a>
            </div>
            <div className="serwrp">
              <ul
                className="list-scrollpkge"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(packageItem.packages_detail) }}
              ></ul>
            </div>
          </div>
        </Col>
      );
   
  })
}

             
            </Row>
            
          </div>
        </div>
        <div className="packagesbox" id="video" style={{ display: activeTarget1 === 'video' ? 'block' : 'none' }}>
        <div className="packagesmain pkgewrp">
            <Row>
            {
          Package2.map((packageItem) => {
        return (
        <Col key={packageItem.id} sm={12} xs={12} md={3} lg={3} xl={3}>
          <div className="mainpkge pdng-btm pdng-btm">
            <div className="pkgnam">
              <h4>{packageItem.package_heading}</h4>
              <span>Starting at </span>
            </div>
            <div className="pricewrp">
              <h3>{packageItem.packages_price}</h3>
              <p>Suitable for potential super-startups and brand revamps for companies.</p>
            </div>
            <div className="btnwrp">
              <a href="#" className="btn-pack order-package">
                Start
              </a>
            </div>
            <div className="serwrp">
              <ul
                className="list-scrollpkge"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(packageItem.packages_detail) }}
              ></ul>
            </div>
          </div>
        </Col>
      );
   
  })
}

             
            </Row>
            
          </div>
        </div>
        <div className="packagesbox" id="seo" style={{ display: activeTarget1 === 'seo' ? 'block' : 'none' }}>
        <div className="packagesmain pkgewrp">
            <Row>
            {
            Package3.map((packageItem) => {
        return (
        <Col key={packageItem.id} sm={12} xs={12} md={3} lg={3} xl={3}>
          <div className="mainpkge pdng-btm pdng-btm">
            <div className="pkgnam">
              <h4>{packageItem.package_heading}</h4>
              <span>Starting at </span>
            </div>
            <div className="pricewrp">
              <h3>{packageItem.packages_price}</h3>
              <p>Suitable for potential super-startups and brand revamps for companies.</p>
            </div>
            <div className="btnwrp">
              <a href="#" className="btn-pack order-package">
                Start
              </a>
            </div>
            <div className="serwrp">
              <ul
                className="list-scrollpkge"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(packageItem.packages_detail) }}
              ></ul>
            </div>
          </div>
        </Col>
      );
   
  })
}

             
            </Row>
            
          </div>
        </div>
        <div className="packagesbox" id="combo" style={{ display: activeTarget1 === 'combo' ? 'block' : 'none' }}>
        <div className="packagesmain pkgewrp">
            <Row>
            {
            Package4.map((packageItem) => {
        return (
        <Col key={packageItem.id} sm={12} xs={12} md={3} lg={3} xl={3}>
          <div className="mainpkge pdng-btm pdng-btm">
            <div className="pkgnam">
              <h4>{packageItem.package_heading}</h4>
              <span>Starting at </span>
            </div>
            <div className="pricewrp">
              <h3>{packageItem.packages_price}</h3>
              <p>Suitable for potential super-startups and brand revamps for companies.</p>
            </div>
            <div className="btnwrp">
              <a href="#" className="btn-pack order-package">
                Start
              </a>
            </div>
            <div className="serwrp">
              <ul
                className="list-scrollpkge"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(packageItem.packages_detail) }}
              ></ul>
            </div>
          </div>
        </Col>
      );
   
  })
}

             
            </Row>
            
          </div>
        </div>
      </div>
      </Col>
    </Row>
  </Container>
</div>
</>
)
}
export default Packages;