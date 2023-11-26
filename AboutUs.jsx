import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row bg">
          <h1 className='yello'>About Us</h1>

          <div className="col-md-6 col-xs-12 pb-2"><img src="./images/banner6.jpg" class="card-img-top" alt="..." /></div>
          <div className="col-md-6 col-xs-12 about-content">
            <div>
              <h3 className='yello'>Hospital: Your Health, Our Priority</h3>
              <hr />
              <h5>At our hospital, we are dedicated to providing top-notch healthcare services. From the moment you step in, we focus on your well-being. Our skilled medical professionals work tirelessly to ensure your health is in good hands.

                Our state-of-the-art facilities and compassionate staff create a healing environment for our patients. We prioritize your comfort and recovery, offering advanced medical treatments and personalized care.

                In addition to our healthcare services, we provide a range of medical products for your convenience. From prescription medications to wellness products, our pharmacy has you covered.

                If you have a special occasion or event, consider our venue booking options. We offer spaces that cater to various needs, ensuring a seamless and comfortable experience for you and your guests.</h5>
            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs