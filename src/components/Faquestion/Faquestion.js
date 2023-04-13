import React, { useState } from 'react';
import './Faquestion.css'
import faq from '../../images/faq.jpg'

const dataCollection = [
  {
    question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry ?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
  }, {
    question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry ?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
  }, {
    question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
  }, {
    question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry ?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
  }
];

function Faquestion() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return
    }
    setActiveAccordion(index);
  };

  return (
    <>
      <div className="containerquestions">
      <img src={faq} className="faq" alt='faq'/>
      <div className='accordion_all'>
        <div>
          <span className="accordion__title">FAQ</span>
        </div>
        <div className="accordion__faq">
          { dataCollection.map((item, index) =>
              <div key={index} onClick={() => toggleAccordion(index)}>
                <div className="accordion__faq-heading">
                  <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                  <div>
                    {accordion === index ?
                      <span className="verticle"></span> : <span className="horizental"></span>}
                  </div>
                </div>
                <div><p className={accordion === index ? "active" : "inactive"} >{item.answer}</p></div>
              </div>
            )
          }
        </div>
        </div>
      </div>
    </>
  );
}

export default Faquestion;