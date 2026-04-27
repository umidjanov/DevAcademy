import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Courses from "./sections/Courses";
import Quiz from "./sections/Quiz";
import Teachers from "./sections/Teachers";
import Signup from "./sections/Signup";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Quiz />
        <Teachers />
        <Signup />
      </main>
      <Footer />
    </div>
  );
}
