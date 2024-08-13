// import React, { useState } from 'react';
// import './EditTemplatePage.css';

// const EditTemplatePage = () => {
//   const [name, setName] = useState('Your Name');
//   const [title, setTitle] = useState('Your Title');
//   const [address, setAddress] = useState('Your Address');

//   const handleBlur = (setter) => (e) => {
//     setter(e.target.innerText);
//   };

//   return (
//     <div className="template-container">
//       <div className="template-image">
//         <img
//           src="https://marketplace.canva.com/EAFhHrjw0Qk/1/0/1131w/canva-black-and-white-simple-classic-professional-cover-letter-G55SxrJRkKo.jpg"
//           alt="Template"
//         />
//         <div className="editable-overlay">
//           <div
//             className="editable-name"
//             contentEditable
//             onBlur={handleBlur(setName)}
//           >
//             {name}
//           </div>
//           <div
//             className="editable-title"
//             contentEditable
//             onBlur={handleBlur(setTitle)}
//           >
//             {title}
//           </div>
//           <div
//             className="editable-address"
//             contentEditable
//             onBlur={handleBlur(setAddress)}
//           >
//             {address}
//           </div>
//         </div>
//       </div>
//       <button className="save-button">Save Changes</button>
//     </div>
//   );
// };

// export default EditTemplatePage;
