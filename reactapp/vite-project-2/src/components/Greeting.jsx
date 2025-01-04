
const Greeting = ({timeOfDay,message}) => {
 if(timeOfDay == 'morning')
 {
    return <h1>{message} Good Morning! </h1>
 }
 else(timeOfDay == 'afternoon')
 {
    return <h1> {message} Good Afternoon!</h1>
 }
}

export default Greeting