import { useState } from 'preact/hooks'
import './app.css'
import MultipleInput from './component/MultipleInput'

export function App() {
  const [userRegistration,setuserRegistration] = useState({
    username:"",
    email:"",
    phone:"",
    password:""
  });

  const handleInput=(e)=>{
      const name = e.target.name;
      const value = e.target.value;
    
      setuserRegistration({...userRegistration,[name]:value});
  }

  const[records ,setRecords]= useState([]);

  const handleSubmit=(e)=>{
       e.preventDefault();

       const newRecord = {...userRegistration, id:new Date().getTime().toString()}
       console.log(records);
       setRecords([...records,newRecord]);
       setuserRegistration({username:"",email:"",phone:"",password:""})
       //console.log(records);
  }

  return (
    <>
     <form action="" onSubmit={handleSubmit} >
      <div>
        <label htmlFor="username">Fullname</label>
        <input type="text" autoComplete='off' value={userRegistration.username} onChange={handleInput} name="username" id="username" />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input type="text" autoComplete='off' value={userRegistration.email} onChange={handleInput} name="email" id="email" />
      </div>
      <div>
        <label htmlFor="phone">phone</label>
        <input type="text" autoComplete='off' value={userRegistration.phone} onChange={handleInput} name="phone" id="phone" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" autoComplete='off' value={userRegistration.password} onChange={handleInput} name="password" id="password"/>
      </div>
      <button type='submit'>Registration</button>
     </form>
     <div>
      {
        records.map((curr)=>{
          return (
            <div className='showDataStyle'>
              <p>{curr.username}</p>
              <p>
                {curr.email}
              </p>
              <p>{curr.phone}</p>
              <p>{curr.password}</p>
              </div>
          )
        })
      }
     </div>
    </>
  )
}
