import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Courses from "./sections/Courses";
import Quiz from "./sections/Quiz";
import Teachers from "./sections/Teachers";
import Signup from "./sections/Signup";
import Footer from "./sections/Footer";
import CourseTypeCards from "./components/CourseTypeCards";
import WhyDevAcademy from "./components/WhyDevAcademy";
import Kasblar from "./components/Kasblar";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CourseTypeCards />
        <Courses />
        <WhyDevAcademy />
        <Kasblar />
        <Quiz />
        <Teachers />
        <Signup />
      </main>
      <Footer />
    </div>
  );
}
