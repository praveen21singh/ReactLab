
const UserList = () => {

    const users = [
        {id: 1, name: 'Alice', age: 25},
        {id: 2, name: 'Bob', age: 30},
        {id: 3, name: 'Charlie', age: 22},
        
    ]


  return (
    <div>
        {users.map((user)=> (

            <div key={user.id}>
                <h1>{user.name}</h1>
                <h1>{user.age}</h1>
            </div>
            
        ))}
    </div>
  )
}

export default UserList