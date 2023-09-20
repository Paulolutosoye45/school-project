//react
import { useState } from "react"
//css
import '../Auth.css'
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Auth } from "../utilis/firebase"

  const FormState = {
    email: '',
    password: '',
}
const Login= () => {
const [form, setform] =useState(FormState)
const  [err, setError]=useState(null)
const navigate = useNavigate();
const {email, password}=form
const handleChange = (event) => {
  const {name, value}= event.target
  setform({...form, [name]: value})
}
const  resetForm  = () => {
  setform(FormState)
}
const HandleSubmit =(event) => {
  event.preventDefault()
  signInWithEmailAndPassword(Auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

      navigate('/detail')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
      setError(errorCode)
  });
  resetForm()
  }
  return (
    <div className="formWrapper">
      <h1>login </h1>
      <form action="" onSubmit={HandleSubmit} className="login">
        <div className="Authname">
        <input type="email" name="email"value={email} id="email" placeholder="enter your email address" required  onChange={handleChange} />
        <input type="password" name="password" value={password} id="password" placeholder="password" required onChange={handleChange} />
        </div>
        <button className="btn-login">Login</button>
      <p className="Account"><Link to='/sign_up'>Create an Account</Link></p>
      </form>
      <div style={{color: 'red',fontSize:'20px'}}>{err}</div>
    </div>
  )
}

export default Login





   //Create a unique image name
//    const date = new Date().getTime();
//    const storageRef = ref(storage, `${displayName + date}`);

//    await uploadBytesResumable(storageRef, uploadImage).then(() => {
//      getDownloadURL(storageRef).then(async (downloadURL) => {
//        try {
//          //Update profile
//          await updateProfile(res.user, {
//            displayName,
//            photoURL: downloadURL,
//          });
//          //create user on firestore
//          await setDoc(doc(db, "student", res.user.uid), {
//            uid: res.user.uid,
//            displayName,
//            email,
//            // FatherName,
//            // MotherName,
//            // photoURL: downloadURL,
//            // gender,
//            // date_of_birth:dateValue,
//          });
//        } catch (err) {
//          console.log(err);
//          setError(true);
//        }
//      });
//    });
//  } catch (err) {
//    console.log(err.message)
//    // setError(true);
//  }