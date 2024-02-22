import { useState } from "react";
import Image from "./components/Image";

function App() {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  let [page, setPage] = useState(1);
  let count = 1;

  const apiUrl = "https://api.unsplash.com/search/photos?page=";
  const apiKey = "LxcqvcS2pRgJ3nv5xw6xJY2NJn3xY0gZFOsdkx22vsg";

  const fetchApi = async () => {
    try {
      const URL = `${apiUrl}${page}&query=${name}&client_id=${apiKey}&per_page=20`;
      const response = await fetch(URL);
      const data = await response.json();
      setImages(data.results);
      count = 1;
    } catch (error) {
      console.log('error');
    }
  };

  const addPage = () => {
    setPage(page + 1);
    // console.log(page);
    fetchApi();
  };
  const subtractPage = () => {
    setPage(page - 1);
    fetchApi();
  };

  return (
    <div>
      <div className="my-14 text-center text-4xl p-5 ">
        <div className="hover:underline underline-offset-[10px] font-semibold">
          Image Search Engine
        </div>
      </div>

      <div className="text-center mb-16">
        <input
          type="search"
          className="w-[75%] lg:w-[40%] h-14 bg-violet-100 rounded-s-lg text-lg p-5 font-semibold uppercase"
          placeholder="Search anything here..."
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className="w-20 h-14 text-lg font-semibold rounded-e-lg  uppercase bg-orange-600 text-white hover:bg-orange-500 "
          onClick={fetchApi}
        >
          Search
        </button>
      </div>


   <div className="w-screen h-auto flex flex-wrap">
        <Image links={images} />
      </div> 

      <div className="flex justify-around mt-6">
        {page <= 1 ? null : (
          <button
            className="w-32 h-14 text-lg font-semibold rounded-lg  uppercase bg-orange-600 text-white hover:bg-orange-500 mt-6"
            onClick={subtractPage}
          >
            previous
          </button>
        )}

        {page > 20 ? null : (
          
          <button
            className="w-32 h-14 text-lg font-semibold rounded-lg  uppercase bg-orange-600 text-white hover:bg-orange-500 mt-6"
            onClick={addPage}
          >
            Next
          </button>
        )}
      </div> 


      
    </div>
  );
}

export default App;
