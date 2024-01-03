import Header from './comp/header/Header'
import jsonData from './comp/json/data.json';
import Navbar from './comp/navbar/Navbar';
import About from './comp/about/About';
import Instructor from './comp/instructor/Instructor';
import Test from './comp/reviewes/Test';

function App() {
  const {instructor,course}=jsonData;
   const {name:instructorName}=instructor;
   const {title:courseTitle}=course;

  return (
    <div>
    
        <Header instructorName={instructorName} courseTitle={courseTitle}/>
        <Navbar/>
        <About/>
        <Instructor/>
        <Test testimonialData={jsonData.testimonial}/>
    </div>
  )
}

export default App;
