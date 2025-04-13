import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function FormView() {
  const { formId } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Fetch from localStorage
    const savedForm = localStorage.getItem(`form_${formId}`);
    if (savedForm) {
      setFormData(JSON.parse(savedForm));
    }
  }, [formId]);

  if (!formData) return <div>Loading...</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    // Optionally send data to backend
  };

  return (
    <div>
      <h2>{formData.title}</h2>
      <form onSubmit={handleSubmit}>
        {formData.questions.map((q, idx) => (
          <div key={idx}>
            <label>{q.questionText}</label>
            {q.type === 'short' && <input type="text" name={`q_${idx}`} />}
            {q.type === 'long' && <textarea name={`q_${idx}`} />}
            {q.type === 'radio' &&
              q.options.map((opt, i) => (
                <div key={i}>
                  <input type="radio" name={`q_${idx}`} value={opt} />
                  <label>{opt}</label>
                </div>
              ))}
            {q.type === 'checkbox' &&
              q.options.map((opt, i) => (
                <div key={i}>
                  <input type="checkbox" name={`q_${idx}_${i}`} value={opt} />
                  <label>{opt}</label>
                </div>
              ))}
            {q.type === 'date' && <input type="date" name={`q_${idx}`} />}
            {q.type === 'time' && <input type="time" name={`q_${idx}`} />}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormView;
