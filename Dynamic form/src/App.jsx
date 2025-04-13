import { useState } from 'react'
import Questionscomponent from './Questionscomponent'
import './App.css'


function App() {
  
const [btn,setBtn]=useState(false);
const [QnList,setQnList]=useState([]);

const viewQuestions=(e)=>{

  e.preventDefault();
  setQnList((prev)=>[...prev,{}])
  // ...prev means "take all the items in the previous QnList and copy them".
// {} is a new empty object that you are adding to the array (this represents a new "question" in your list).

}


  return (
    <>
  <form>

      <div className='Title'>
         <input type="text" name='Title 1' placeholder='Enter Form title' />
         <textarea name="Form description" id="FTitle" placeholder='Form description'></textarea>
       </div>

     <div className='Questions'>
        <button type="button" onClick={viewQuestions}>Add questions</button>
       
       {QnList.map((_,index)=>(
       <Questionscomponent key={index} index={index+1} />
       ))}

       {/* .map() to loop over qnlist  You're rendering one <Questionscomponent /> for every item in questionList. */}

     </div>


 </form>
      


    </>
  )
}

export default App
