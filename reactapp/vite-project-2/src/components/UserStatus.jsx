
const UserStatus = ({loggedIn,isAdmin}) => {
  
    if (loggedIn && isAdmin)
    {
        return <h1>Welcome Admin!</h1>
    }
    else if (loggedIn && isAdmin == false)
    {
        return <h1>Welcome User!</h1>
    }
}

export default UserStatus