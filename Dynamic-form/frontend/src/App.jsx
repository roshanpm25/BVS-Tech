// // import { useState } from 'react'
// // import Questionscomponent from './Questionscomponent'
// // import './App.css'
// // import { useNavigate } from 'react-router-dom';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// // function App() {
  
// // const [btn,setBtn]=useState(false);
// // const [QnList,setQnList]=useState([]);
// // const navigate = useNavigate();

// // const viewQuestions=(e)=>{

// //   e.preventDefault();
// //   setQnList((prev)=>[...prev,{}])
// //   // ...prev means "take all the items in the previous QnList and copy them".
// // // {} is a new empty object that you are adding to the array (this represents a new "question" in your list).

// // }

// // const publish=()=>{

// //   const formId = Date.now().toString(); // Unique ID
// //   const formDetails = {
// //     title: "My Form",
// //     questions: [...QnList], // Save your form data here
// //   };
// //   localStorage.setItem(`form_${formId}`, JSON.stringify(formDetails));
// //   const url = `${window.location.origin}/form/${formId}`;
// //   alert(`Form published! Share this URL: ${url}`);
// // }


// //   return (
// //     <>
// // <button className="publish" onClick={publish}>Publish</button>

// //   <form>

// //       <div className='Title'>
// //          <input type="text" name='Title 1' placeholder='Enter Form title' />
// //          <textarea name="Form description" id="FTitle" placeholder='Form description'></textarea>
// //        </div>

// //      <div className='Questions'>
// //         <button type="button" onClick={viewQuestions}>Add questions</button>
       
// //        {QnList.map((_,index)=>(
// //        <Questionscomponent key={index} index={index+1} />
// //        ))}

// //        {/* .map() to loop over qnlist  You're rendering one <Questionscomponent /> for every item in questionList. */}

// //      </div>


// //  </form>
      


// //     </>
// //   )
// // }

// // export default App
// import { useState } from 'react';
// import Questionscomponent from './Questionscomponent';
// import './App.css';
// import axios from 'axios'; // Import axios for sending form data to the backend
// import { useNavigate } from 'react-router-dom';

// function App() {
//   const [btn, setBtn] = useState(false);
//   const [QnList, setQnList] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const navigate = useNavigate();

//   // Function to add new question to the form
//   const viewQuestions = (e) => {
//     e.preventDefault();
//     setQnList((prev) => [...prev, {}]);
//   };

//   const publish = async () => {
//     const formId = Date.now().toString(); // Unique ID
//     const formDetails = {
//       title,
//       description,
//       questions: QnList, // Save questions from the state
//     };
  
//     try {
//       // Send form data to your backend (e.g., using axios to post data)
//       const response = await axios.post('/api/create', formDetails);  // Change formData to formDetails
  
//       if (response.status === 201) {
//         const url = `https://dynamic-form-five-zeta.vercel.app/${formId}`; // Update the URL to your Vercel URL
//         alert(`Form published! Share this URL: ${url}`);
//       }
//     } catch (error) {
//       console.error('Error publishing form', error);
//       alert('Failed to publish the form');
//     }
//   };
  

//   return (
//     <>
//       <button className="publish" onClick={publish}>Publish</button>

//       <form>
//         <div className='Title'>
//           <input
//             type="text"
//             name='title'
//             placeholder='Enter Form title'
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           <textarea
//             name="description"
//             id="FTitle"
//             placeholder='Form description'
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           ></textarea>
//         </div>

//         <div className='Questions'>
//           <button type="button" onClick={viewQuestions}>Add questions</button>

//           {QnList.map((_, index) => (
//             <Questionscomponent key={index} index={index + 1} />
//           ))}
//         </div>
//       </form>
//     </>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import Questionscomponent from './Questionscomponent';
// import './App.css';
// import { useNavigate } from 'react-router-dom';

// function App() {
//   const [QnList, setQnList] = useState([]); // Store list of questions
//   const navigate = useNavigate();

//   // Function to add new question
//   const viewQuestions = (e) => {
//     e.preventDefault();
//     setQnList((prev) => [...prev, {}]);
//   };
  // const publish = () => {
  //   const formId = Date.now().toString(); // Unique ID
  //   const formDetails = {
  //     title: "My Form",
  //     questions: [...QnList], // Save your form data here
  //   };
  //   localStorage.setItem(`form_${formId}`, JSON.stringify(formDetails));
  
  //   // 💡 Always use the Vercel live URL here
  //   const baseURL = 'https://dynamic-form-roshan-p-ms-projects.vercel.app';
  
  //   const url = `${baseURL}/form/${formId}`;
  //   alert(`Form published! Share this URL: ${url}`);
  // };import React, { useState } from 'react';
import Questionscomponent from './Questionscomponent';
import './App.css';

function App() {
  const [QnList, setQnList] = useState([]); // Store list of questions

  // Function to add a new question
  const viewQuestions = (e) => {
    e.preventDefault();
    setQnList((prev) => [...prev, {}]);
  };

  // Publish function to send form data to the backend
  const publish = async () => {
    const formId = Date.now().toString(); // Unique ID
    const formDetails = {
      title: "My Form",
      questions: [...QnList], // Store questions in the state
    };
  
    try {
      // Send form data to the backend using fetch
      const response = await fetch('/api/form/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDetails),
      });

      if (response.status === 201) {
        const data = await response.json();
        // Construct the shareable URL with the form ID
        const url = `${window.location.origin}/form/${data.formId}`;
        alert(`Form published! Share this URL: ${url}`);
      } else {
        alert('Failed to publish the form');
      }
    } catch (error) {
      console.error('Error publishing form', error);
      alert('Failed to publish the form');
    }
  };

  return (
    <>
      <button className="publish" onClick={publish}>Publish</button>

      <form>
        <div className='Title'>
          <input type="text" name='title' placeholder='Enter Form title' />
          <textarea name="description" placeholder='Form description'></textarea>
        </div>

        <div className='Questions'>
          <button type="button" onClick={viewQuestions}>Add questions</button>

          {/* Dynamically render Question components */}
          {QnList.map((_, index) => (
            <Questionscomponent key={index} index={index + 1} />
          ))}
        </div>
      </form>
    </>
  );
}

export default App;
