import Header from './Header.jsx'
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './About-card.jsx';
import Button from './button.jsx';
import Student from './student.jsx'
import List from './listrender.jsx'
function App() {
  return(
    <div className='App'>
       <Header/>
       <div className='Cards'>
        <Card/>
        <Card/>
        <Card/>
       </div>
       <Button/>

       <Food/>

       <Student name="Prashant Paudel" age={21} isStudent={true}/>
       <Student /> {/*This is displaying the default values in the Student component's function */}
       <Student name = "Hari Sharan" age={99} isStudent = {true}/>

       <List/>
       
       <Footer/>
    </div>
    
  );
}

export default App
