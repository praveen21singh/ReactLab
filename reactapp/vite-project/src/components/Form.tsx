
const Form = () => {

    const myName = 'Praveen Singh'
    const multiply = (b=34,a=4) => a + b;
    const skills = ['python','javascript','SQL','Machine Learning']
    const specialDesignation = 'Data Science Engineer'
 
    return (
  <div>
  <form>

    <p> My Name is: {myName}</p>
    <p> My Skills list: {skills}</p>
    <p> My Designation is: {specialDesignation}</p>
    <p>{multiply(5)}</p>

    {/* <label htmlFor="name">First Name</label>
    <input type='text' placeholder='Enter Your Name'></input>
    <label htmlFor='Dob'>Your Dob</label>
    <input type='date' placeholder='Enter your Date of Birth'></input> */}
  </form>
  </div>
  )
}

export default Form