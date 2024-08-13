import React from 'react';
import './Features.css';
import { MdBuild, MdEdit, MdSchool, MdSettings, MdDevices, MdSupportAgent, MdCheckCircle, MdDescription, MdOutlineAssignment } from "react-icons/md";

const featuresData = [
    {
        icon: <MdBuild />,
        title: 'Easy Online Resume Builder',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.',
        moreInfo: 'Build your resume online with ease, using our intuitive and user-friendly interface.',
    },
    {
        icon: <MdEdit />,
        title: 'Easy Customizable',
        description: 'Easier to create professional websites in no time, even without knowledge of HTML/CSS/PHP, without involvement of developers.',
        moreInfo: 'Customize your website effortlessly with our pre-built templates and drag-and-drop features.',
    },
    {
        icon: <MdSchool />,
        title: 'Advanced Resume',
        description: 'BreezyCV clearly communicates your job history, work experience, accomplishments, and education – in the order you desire.',
        moreInfo: 'Highlight your achievements and skills in a clean and modern resume format.',
    },
    {
        icon: <MdSettings />,
        title: 'Additional Options for Customization',
        description: 'Customize your resume with various options and templates to make it stand out.',
        moreInfo: 'Choose from a variety of templates and design options to create a unique resume.',
    },
    {
        icon: <MdDevices />,
        title: 'Fully Responsive',
        description: 'Your resume will look great on any device, from desktops to mobile phones.',
        moreInfo: 'Ensure your resume looks professional on all devices with our responsive design.',
    },
    {
        icon: <MdSupportAgent />,
        title: '24/7 Support',
        description: 'We offer round-the-clock support to assist you with any queries or issues.',
        moreInfo: 'Our dedicated support team is available 24/7 to ensure you have a seamless experience.',
    },
    {
        icon: <MdCheckCircle />,
        title: 'Resume Analyzer',
        description: 'Enhance your resume with personalized feedback to boost your job prospects.',
        moreInfo: 'Boost your job prospects with personalized feedback. Our tool analyzes your resume for key elements and provides actionable insights to enhance its format, content, and keywords.',
    },
    {
        icon: <MdDescription />,
        title: 'Customizable Cover Letter',
        description: 'Easily create a tailored cover letter with editable templates to highlight your skills and stand out to employers.',
        moreInfo: 'Create a tailored cover letter with our easy-to-use tool. Choose from editable templates to showcase your skills and make a strong impression on potential employers.',
    },
    {
        icon: <MdOutlineAssignment />,
        title: 'Comprehensive Guide',
        description: 'Your all-in-one resource for in-depth knowledge and practical tips on [topic], covering everything from basics to advanced strategies for success.',
        moreInfo: 'Your all-in-one resource for in-depth knowledge and practical tips on [topic]. It covers essential concepts and advanced strategies to help you navigate challenges and achieve your goals effectively.',
    }
];

const Features = () => {
    return (
        <div className="features">
            <div className="features-header">
                <h1>Key Attributes</h1>
                <p className="para">Hey there, these are our main features</p>
            </div>
            <div className="features-content">
                {featuresData.map((feature, index) => {
                    const [firstWord, ...rest] = feature.title.split(' ');
                    return (
                        <div className="feature-item" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h2>
                                <span className="highlight">{firstWord}</span> {rest.join(' ')}
                            </h2>
                            <p>{feature.description}</p>
                            <div className="more-info">{feature.moreInfo}</div>
                        </div>
                    );
                })}
            </div>
            <div className="cta-section">
                <div className="cta-content">
                    <MdOutlineAssignment className="cta-icon" />
                    <h2>Ready to Build Your Professional Resume?</h2>
                </div>
                <button>Get Started Now</button>
            </div>
        </div>
    );
}

export default Features;