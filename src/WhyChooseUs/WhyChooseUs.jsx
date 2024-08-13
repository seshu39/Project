import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faUserTie,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-usss">
      <div className="content-wrapperss">
        <div className="choose-containerss">
          <div className="featuressss">
            <div className="featuress-itemss">
              <div className="icon-containerss">
                <FontAwesomeIcon icon={faThumbsUp} className="iconss" />
              </div>
              <div className="featuress-textss">
                <h3>Easy Online Resume Builder</h3>
                <p class="p2ss">
                  Effortlessly create a standout resume with our intuitive
                  online builder and customizable templates.
                </p>
              </div>
            </div>
            <div className="featuress-itemss">
              <div className="icon-containerss">
                <FontAwesomeIcon icon={faUserTie} className="iconss" />
              </div>
              <div className="featuress-textss">
                <h3>Step By Step Expert Tips</h3>
                <p class="p2ss">
                  Our guidance ensures your documents are polished and
                  professional.
                </p>
              </div>
            </div>
            <div className="featuress-itemss">
              <div className="icon-containerss">
                <FontAwesomeIcon icon={faCheckCircle} className="iconss" />
              </div>
              <div className="featuress-textss">
                <h3>Recruiter Approved Phrases</h3>
                <p class="p2ss">
                Boost your chances of landing your dream job with industry-specific language.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="descriptionss">
          <h2>Why Choose Our Platform?</h2>
          <p class="p1ss">
            Our platform offers a highly personalized and user-friendly
            experience, enabling you to create professional resumes and cover
            letters with ease. With a wide range of expertly crafted templates
            and real-time feedback, you can tailor your documents to fit your
            specific career goals and industry standards.
          </p>
          <p class="p1ss">
            Our intuitive design ensures that even those with minimal technical
            skills can navigate the process effortlessly, making it quick and
            straightforward to build and refine your resume.We prioritize your
            privacy and security, using top-notch encryption methods to protect
            your personal information and career documents.{" "}
          </p>
          <button className="cta-buttonss">LET'S BUILD YOUR CV</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
