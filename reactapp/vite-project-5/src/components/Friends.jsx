import { useState } from "react"

const Friends = () => {

    const [friends, setFriends] = useState(['Praveen','Aarsh','Ambika','Tuhin','Karan'])
    const addFriendHandler = () => setFriends([...friends,'Surender']);
    const removeFriendHandler = () => setFriends(friends.filter(friend => friend != 'Ambika' ))
    const updateFriendHandler = () => {
      setFriends(friends.map(friend => friend == 'Tuhin' ? "Tuhin Pal": friend))

    }

      
  return (
    <div> 
       <h1>useState React Hook Example 2</h1>
     
       {friends.map(friend => (
         <li key={Math.random()} style={{marginLeft: '320px', paddingRight: '10rem'}}>{friend}</li>  
       ))}

        <button onClick={addFriendHandler}>Add New Friend</button>
        <button onClick={removeFriendHandler}>Remove One Friend</button>
        <button onClick={updateFriendHandler}>Update One Friend</button>

    </div>
  )
}

export default Friends