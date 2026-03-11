import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background bg-opacity-10">
      <Navbar />
      <div className="min-h-screen w-full flex flex-col items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
