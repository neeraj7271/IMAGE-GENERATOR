import React, { useState } from "react";
import axios from "axios"

function Form() {
  const [formData, setFormData] = useState({
    prompt: "", // Make sure to initialize your state with the same structure as your form fields
  });
  const [url, setUrl] = useState("");

  const formEndpoint = "http://localhost:3000/api/v1/getData/";

  async function submitData() {
    try {
        console.log("form data: ", formData)
      const res = await axios.post(formEndpoint, formData,{
        
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUrl(res.data.output);
    }
    
    catch (error) {
        console.log(error);
    }
  }

  console.log("url: ", url);
  function submitHandler(e) {
    e.preventDefault();
    submitData();
  }

  function changeHandler(e) {
    
    const {name, value , checked, type} = e.target;

    setFormData((prevData) => {
        return {
            ...prevData,
            [name] : type === "checkbox" ? checked : value
        }
    })    
}

console.log(formData);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="prompt"
          placeholder="Enter your prompt"
          value={formData.prompt}
          onChange={changeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );

}

export default Form;




// import React, { useState } from "react";
// import axios from "axios"

// function Form() {
//   const [formData, setFormData] = useState({
//     prompt: ""
//   });

//   const formEndpoint = "http://localhost:3000/api/v1/getData";

//   async function submitData() {
//     console.log("form data", formData);
//     // try {
//     //   const response = await fetch(formEndpoint, {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "String",
//     //     },
//     //     body: formData,
//     //     mode: "no-cors"
//     //   });

//     //   if (!response.ok) {
//     //     console.error(`Server returned ${response.status} status.`, await response.text());
//     //   }
//     // } catch (error) {
//     //   console.error('An error occurred while submitting the form:', error);
//     // }

//     try {
//         console.log(formData);
//         await axios.post(formEndpoint, JSON.stringify(FormData))
//     } catch (error) {
//         console.log(error);
//     }
//   }

//   function submitHandler(e) {
//     e.preventDefault();
//     submitData();
//   }

//   function changeHandler(e) {
//     setFormData({
//         [e.target.name] : e.target.value
//     });
//   }

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input
//           type="text"
//           name="prompt"
//           placeholder="Enter your prompt"
//           value={formData.prompt}
//           onChange={changeHandler}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Form;

