import React from 'react'

const Faq = () => {
  const faq = [
    {
      title: "Q. What facilities are available in the hospital?",
      para:
        "We offer a wide range of facilities to ensure comprehensive healthcare. Our hospital is equipped with advanced medical technology and experienced professionals.",
      desc:
        "Our services include emergency care, state-of-the-art operation theaters, comfortable patient rooms, and expert medical professionals to address your healthcare needs.",
    },
    {
      title: "Q. How do I book an appointment with a specialist?",
      desc:
        "Booking an appointment with a specialist is easy. You can either call our appointment helpline at +1-XXXXXX or use our online appointment booking system on our website.",
    },
    {
      title: "Q. What insurance plans do you accept?",
      desc:
        "We accept a wide range of insurance plans to make healthcare more accessible to our patients. Please check with our insurance desk for details on accepted insurance providers.",
    },
    {
      title: "Q. How can I inquire about the hospital's COVID-19 safety measures?",
      desc:
        "Ensuring the safety of our patients is our top priority. You can inquire about our COVID-19 safety measures by contacting our front desk or visiting our dedicated COVID-19 information page on our website.",
    },
    {
      title: "Q. What specialties does the hospital cover?",
      desc:
        "Our hospital covers a variety of medical specialties, including but not limited to cardiology, orthopedics, neurology, and pediatrics. Our team of specialized doctors is dedicated to providing quality care in each field.",
    },
  ];
  return (
    <div>
        <div className="container-fluid fqa">
            <div className="row bg">
                <h1 className="yello">Frequently Asked Questions</h1>   
                    {
                        faq.map(ele=>
                            
                                <div className="col-md-8 col-xs-10 ms-auto me-auto ">
                                 <div className="card mb-2 ">
                                  <h5 className='yello'>{ele.title}</h5>
                                  <p class="border-bottom pb-3 border-warning">{ele.desc}</p>
                                 </div>
                                </div>
                
               

                            )
                    }
                   
                </div>
            </div>
        </div>
  
  )
}

export default Faq