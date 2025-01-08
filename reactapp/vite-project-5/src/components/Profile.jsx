import { useState } from "react"

const Profile = () => {
    const [profile, SetProfile] = useState(
        {
            name: "",
            age: "",
        }
    )


  

    const handleChange = e => {
        const {name, value} = e.target

        SetProfile((prevProfile) => ({
            ...prevProfile, [name] : value,
        }))

      }; 
  

      
  return (
    <div>

        

        <div>
        <label>Name: 
        <input type="text" name="name" value={profile.name} onChange={handleChange}/>
        </label>
        </div>
       
        <br></br>
        <div>
        <label>Age:  
        <input type="number" name="age" value={profile.age} onChange={handleChange}/> 
        </label>
        </div>
       


        <h1>Profile Information</h1>
        <li>{profile.name}</li>
        <li>{profile.age}</li>
        <br></br>

    </div>
  )
}

export default Profile