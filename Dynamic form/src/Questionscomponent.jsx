import React, { useState } from "react";
import './App.css';
import image_icon from './assets/image_icon.png';
import './DatePickerWithEmoji.css';

function Questionscomponent({ props, index }) {
  const options = [
    { label: 'Short answer', value: 'short_answer', icon: <span className="material-symbols-outlined">sort</span> },
    { label: 'Paragraph', value: 'paragraph', icon: <span className="material-symbols-outlined">view_headline</span> },
    { label: 'Multiple choice', value: 'Multiple_choice', icon: <span className="material-symbols-outlined">radio_button_checked</span> },
    { label: 'Checkboxes', value: 'checkboxes', icon: <span className="material-symbols-outlined">check_box</span> },
    { label: 'Dropdown', value: 'dropdown', icon: <span className="material-symbols-outlined">arrow_drop_down_circle</span> },
    { label: 'File upload', value: 'File_upload', icon: <span className="material-symbols-outlined">cloud_upload</span> },
    { label: 'Linear scale', value: 'Linear_scale', icon: <span className="material-symbols-outlined">linear_scale</span> },
    { label: 'Rating', value: 'rating', icon: <span className="material-symbols-outlined">star</span> },
    { label: 'Multiple choice grid', value: 'Multiple_choice_grid', icon: <span className="material-symbols-outlined">apps</span> },
    { label: 'Checkbox grid', value: 'Checkbox_grid', icon: <span className="material-symbols-outlined">grid_on</span> },
    { label: 'Time', value: 'time', icon: <span className="material-symbols-outlined">schedule</span> },
    { label: 'Date', value: 'date', icon: <span className="material-symbols-outlined">event</span> },
  ];

  const [pdfFile, setPdfFile] = useState(null);
  const [DropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[2]);
  const [multipleOptions, setMultipleOptions] = useState(["Option 1"]);
  const [checkboxOptions, setCheckboxOptions] = useState(["Option 1"]);

  const [isFileDisabled, setIsFileDisabled] = useState(true); // Initially, file input is disabled


  const [selectedTime, setSelectedTime] = useState("");
  const [showTimePicker, setShowTimePicker] = useState(true);
  
  const [selectedDate, setSelectedDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(true);





  const Files = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please select a PDF file.");
    }
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const addOption = () => {
    setMultipleOptions([...multipleOptions, `Option ${multipleOptions.length + 1}`]);
  };

  const updateOption = (value, index) => {
    const updated = [...multipleOptions];
    updated[index] = value;
    setMultipleOptions(updated);
  };

  const removeOption = (index) => {
    const updated = multipleOptions.filter((_, i) => i !== index);
    setMultipleOptions(updated);
  };

  const checkbox_addOption = () => {
    setCheckboxOptions([...checkboxOptions, `Option ${checkboxOptions.length + 1}`]);
  };

  const checkbox_updateOption = (value, index) => {
    const cb_updated = [...checkboxOptions];
    cb_updated[index] = value;
    setCheckboxOptions(cb_updated);
  };

  const checkbox_removeOption = (index) => {
    const cb_updated = checkboxOptions.filter((_, i) => i !== index);
    setCheckboxOptions(cb_updated);
  };



  // const toggleCalendar = () => {
  //   setShowCalendar(showCalendar);
  // };
 

  return (
    <div className="Questiontemplate">
      <div className="wrapper">
        {/* Question input */}
        <input type="text" placeholder="Question" />

        {/* File Upload */}
        <label>
          <img src={image_icon} className="image_icon" alt="upload" />
          <input type="file" accept="application/pdf" onChange={Files} style={{ display: 'none' }} />
        </label>

        {/* Dropdown */}
        <div className="custom-dropdown">
          <div className="dropdown-selected" onClick={() => setDropdownOpen(!DropdownOpen)}>
            {selectedOption.icon}
            <span style={{ marginLeft: '8px' }}>{selectedOption.label}</span>
            <span className="material-symbols-outlined" style={{ marginLeft: 'auto' }}>
              expand_more
            </span>
          </div>

          {/* Dropdown options */}
          {DropdownOpen && (
            <div className="dropdown-menu">
              {options.map((opt) => (
                <div key={opt.value} className="dropdown-option" onClick={() => handleSelect(opt)}>
                  {opt.icon}
                  <span style={{ marginLeft: '8px' }}>{opt.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Display based on selected option */}
      <div className="answers">
        {/* Short Answer */}
        {selectedOption.value === 'short_answer' && (
          <div className="short-answer-container">
            <input type="text" placeholder="Short answer text" className="answer1" />
          </div>
        )}

        {/* Paragraph */}
        {selectedOption.value === 'paragraph' && (
          <div className="paragraph-container">
            <textarea placeholder="Long answer text" className="answer2"></textarea>
          </div>
        )}

        {/* Multiple Choice */}
        {selectedOption.value === 'Multiple_choice' && (
          <div className="multiple-choice-container">
            {multipleOptions.map((option, idx) => (
              <div key={idx} className="option-row">
                <input type="radio" name={`question-${index}`} value={option} />
                <input
                  type="text"
                  value={option}
                  onChange={(e) => updateOption(e.target.value, idx)}
                  className="option-input"
                />
                <div className="delete-option-btn">
                  <button type="button" onClick={() => removeOption(idx)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666">
                      <path d="M200-440v-80h560v80H200Z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            <button type="button" className="add-option-btn" onClick={addOption}>
              + Add Option
            </button>
          </div>
        )}

        {/* Checkboxes */}
        {selectedOption.value === 'checkboxes' && (
          <div className="checkbox-container">
            {checkboxOptions.map((cb_option, idx) => (
              <div key={idx} className="cb-option-row">
                <input type="checkbox" name={`question-${index}`} value={cb_option} disabled />
                <input
                  type="text"
                  value={cb_option}
                  onChange={(e) => checkbox_updateOption(e.target.value, idx)}
                />

                <div className="delete-option-btn">
                  <button type="button" onClick={() => checkbox_removeOption(idx)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666">  <path d="M200-440v-80h560v80H200Z" />  </svg>
                  </button>
                </div>
              </div>
            ))}
                  <button type="button" className="add-option-btn-1" onClick={checkbox_addOption}> + Add Option  </button>
          </div>
        )}

        {/* dropdown  */}


        {selectedOption.value === 'File_upload' && (
        <div className="file-upload-container">
          <input
            type="file"
            accept="application/pdf"
            onChange={Files}
            disabled={isFileDisabled} // Disabled based on state
            className="file-upload-input"
          />
        </div>
      )}
    
  {/* rating */}
  {/*  */}
  {/*  */}

  {selectedOption.value === 'time' && (
  <div className="time-picker-container">
    <label>Select Time:</label>

    {showTimePicker && (
      <input
        type="time"
        onChange={(e) => {
          const time = e.target.value;
          const [hour, minute] = time.split(":");
          const ampm = hour >= 12 ? "PM" : "AM";
          const formattedHour = ((hour % 12) || 12).toString().padStart(2, "0");
          const formattedTime = `${formattedHour}:${minute} ${ampm}`;
          setSelectedTime(formattedTime);
          setShowTimePicker(true);
        }}
       
      />

    )}
  </div>
)}


  {selectedOption.value === 'date' && (
    <>
      <label>Select Date:</label>
      
      {showCalendar && (
        <input
          type="date"
          className="real-date-picker"
          onChange={(e) => {
            const date = new Date(e.target.value);
            const formattedDate = date.toLocaleDateString('en-US');
            setSelectedDate(formattedDate);
            setShowCalendar(true);
           
          }}    />
      )} </>
      )}








      </div>
    </div>
  );
}

export default Questionscomponent;
