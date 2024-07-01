import { useState } from "react";
import footerRight from "../assets/images/footer_img.png"

const FAQSection = () => {

    const [activeTab, setActiveTab] = useState('General');
    const [openQuestion, setOpenQuestion] = useState(null);
  
    const tabs = ['General', 'Pre ICO', 'Token', 'Client', 'Legal'];
    const questions = [
      {
        category: 'General',
        question: 'How do I create NFTs on 3dotlink?',
        answer: 'Artists and creators can use our AI-integrated platform to generate NFTs by providing specific inputs, such as the desired features and elements for their digital artwork.'
      },
      {
        category: 'General',
        question: 'What kind of art does 3dotlink support?',
        answer: '3dotlink supports various types of digital art including visual art, music, and virtual reality experiences.'
      },
      {
        category: 'General',
        question: 'How are digital artworks verified for authenticity?',
        answer: 'Digital artworks on 3dotlink are verified using blockchain technology to ensure authenticity and provenance.'
      },
      {
        category: 'General',
        question: 'Can artists access and manage their collections on 3dotlink?',
        answer: 'Yes, artists can easily access and manage their collections through their 3dotlink accounts.'
      }
    ];
  
    return (
        <div id="FAQ_Section">
            <div className="container faq_container">
      <div className="faq_section">
        <h1>Have any question?</h1>
        <p>Curious about 3dotlink? Explore our frequently asked questions to find answers</p>
        <div className="tabs">
          {tabs.map(tab => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="questions">
          {questions
            .filter(question => question.category === activeTab)
            .map((q, index) => (
              <div key={index} className="question_container">
                <div
                  className={`question ${openQuestion === index ? 'question_open': ''}`}
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                >
                  {q.question}
                  {openQuestion === index ? 
                <span className="arrow_icon">&#11165;</span>
                :
                    <span className="arrow_icon">&#11167;</span>
                }
                </div>
                {openQuestion === index && <div className="answer">{q.answer}</div>}
              </div>
            ))}
        </div>
      </div>

      </div>
      </div>
    );
  };
  
  export default FAQSection;