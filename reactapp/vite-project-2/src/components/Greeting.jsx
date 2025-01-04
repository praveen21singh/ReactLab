
const Greeting = ({timeOfDay}) => {
 if(timeOfDay == 'morning')
 {
    return <h1>Good Morning!</h1>
 }
 else(timeOfDay == 'afternoon')
 {
    return <h1> Good Afternoon!</h1>
 }
}

export default Greeting