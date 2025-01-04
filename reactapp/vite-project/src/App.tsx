
import Greet from "./components/Greet.tsx";
import Footer from "./components/Footer.tsx";
import Form from "./components/Form.tsx";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import UserList from "./components/UserList.tsx";
import Persons from "./components/Persons.tsx";
import Products from "./components/Products.tsx";



const App = () => {
  return (
    <div>
       <h1 style={{ position: "absolute", top: 20, left: 100, zIndex: 1, color: "black" }}>
      <Persons name = "Praveen" age = {34} />
      <Products productName = "Television" productPrice = {45000} />
      <Footer/>
    </h1>
   
    </div>
   
  )
}

export default App
