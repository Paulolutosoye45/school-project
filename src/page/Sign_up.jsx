//react
import { useState } from "react"
//firebase
import { Auth, db, storage } from "../utilis/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc, addDoc } from "firebase/firestore"; 
//css
import '../Auth.css'

//react router dom
import { Link, useNavigate } from "react-router-dom";


const FormState = {
  displayName: '',
  Surname:'',
  FatherName:'',
  MotherName:'',
  email: '',
  password: '',
}
const types = ['image/png', 'image/jpeg'];
const Sign_up = () => {
  const [form, setform] =useState(FormState)
  const {displayName, Surname, FatherName, MotherName, email, password}=form
  const [gender, setgender]=useState()
  const [file, setFile] = useState(null);
  const [dateValue, setDateValue] = useState(null);
  const [age, setage]=useState(null)
  const navigate = useNavigate();

  const types = ['image/png', 'image/jpeg'];
  
  
  //formHandler
  const handleChange = (event) => {
    const {id, value}= event.target
    setform({...form, [id]: value})
  }
  const radioChangeHandler = (e) => {
    setgender(e.target.value);
  };

  const  handleDateUpdate = (e) => {
    const dateValue = e.target.value;
    const dateYear = dateValue.slice(0,4)
    // console.log("dateValue : ", dateValue.slice(0, 4));
    setDateValue(dateValue);
    let age = new Date().getFullYear();
     let  calAge =  age - dateYear
     setage(calAge)
     
  }
  
  
//image   handler
const handleFileChange = (e) => {
  let selected = e.target.files[0];

  if (selected && types.includes(selected.type)) {
    setFile(selected);
  } else {
    setFile(null);
  }
};

  //clearing form
  const  resetForm  = () => {
    setform(FormState)
  }
  
  //submitting form
  const HandleSubmit = async (event) => {
    event.preventDefault()

    try {
      // Create user
      const res = await createUserWithEmailAndPassword(Auth, email, password);
      const user = res.user;
      console.log()
      console.log(user)
   

    //file uploading
      const storageRef = ref(storage, 'studentsImg/' + displayName);
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "students", user.uid), {
              Name: displayName,
              surName: Surname,
              FatherName:FatherName,
              MotherName:MotherName,
              Email:email,
              gender:gender,
              Age:age,
              Date_of_birth : dateValue,
              photourl:downloadURL,
            })
              navigate('/detail')
          } catch (err) {
            console.log(err);

          }
        });
      });
    }
catch(e){
  console.log(e.message)
}
    resetForm()
  };

    
    return (
    <div  className="formWrapper">
        <h1>create An Account </h1>
       <form action="post" onSubmit={HandleSubmit} className="signup">
       <p  className="formText">it's quick and easy</p>
       <div className="Name">
          <input 
          type="text"
           id="displayName"
            placeholder='Name'
             value={displayName} 
             required
              onChange={handleChange} 
              />
          <input 
          type="text"
           id="Surname"
            placeholder='Surname' 
             value={Surname}
              required
               onChange={handleChange}
                />
        </div>
        <div className="Name">
          <input
           type="text"
            id="FatherName"
             placeholder='Father name'
              value={FatherName}
               required 
               onChange={handleChange} 
               />
          <input 
          type="text"
           id="MotherName"
            placeholder='mother name'
             value={MotherName}
              required 
               onChange={handleChange}
                />
        </div>
        <div className="form-filed">
          <input
           type="email"
            id="email" 
             placeholder='email address'
              value={email} 
              required
               onChange={handleChange}
               />
          <input
           type="password"
            id="password"
              placeholder='New password'
               value={password}
                required 
                onChange={handleChange}
                />
        </div>
        <div className="Gender">
          <div className="Fm">
          <label htmlFor="Gender">female</label>
        <input
          type="radio"
          onChange={radioChangeHandler}
          id="2"
          checked={gender === "female"}
          value="female"/>
         </div>
         <div className="Ml">
            <label htmlFor="Gender">male</label>
            <input
              type="radio"
                onChange={radioChangeHandler}
                id="1"
                 checked={gender === "male"}
                 value="male"/>
                 </div>
        </div>
        <div className="form-filed">
        <input
         type="date"
         onChange={handleDateUpdate}
         />
         </div>

          <input
           type="file"
           onChange={handleFileChange}
           className="custom-file-input"
           id="file"
           aria-label="picture"
           />
           <label htmlFor="file" className="custom-file-label" aria-label="picture">
               <span>add avatar +</span>
           </label>
          <button className="btn-signup">sign up</button>
          <p className="Account"><Link to='/login'>Already have an Account</Link></p>
       </form>
    </div>
  )
}

export default Sign_up