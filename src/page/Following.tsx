import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Following = () => {
  return (
    <>
      <div className="min-h-[100vh] flex flex-col justify-between">
        <div>
          <Navbar />
          <div className="flex flex-col items-center">
            <div className="w-[40rem] mt-[10rem]">
              <h2 className="text-3xl font-bold mb-[1rem]">Search for users</h2>
              <input
                className="w-full border border-[#424242] p-3 mb-[5rem] rounded-md"
                type="text"
                placeholder="Username"
              />
              <h3 className="text-2xl font-[500]">Following</h3>
              <ul>
                <li><a href="#" className="hover:text-primary-500 transition"> Spider Man</a></li>
                <li><a href="#" className="hover:text-primary-500 transition"> Iron Man</a></li>
                <li><a href="#" className="hover:text-primary-500 transition"> Dr Strange</a></li>
                <li><a href="#" className="hover:text-primary-500 transition"> Black Widow</a></li>
                <li><a href="#" className="hover:text-primary-500 transition"> Wonder Woman</a></li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Following;
