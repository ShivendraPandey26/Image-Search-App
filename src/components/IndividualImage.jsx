import React from "react";

function individualImage(props) {
  // console.log(props.image);
  // console.log(props.image.links);

  return (
    <div className=" flex flex-wrap  lg:w-[25%]  p-14 mt-2 bg-gray-300 border-2 ">
      <img src={props.image.urls.small} alt="photos" className="h-full" />

      <div className="flex content-between gap-1 m-3"> 

      <a
        href={props.image.links.html}
        target="_blank"
        className='w-28 h-10 text-lg font-semibold text-center p-1 rounded-lg  bg-orange-600 text-white hover:bg-orange-500 '
        >
        Download
      </a>
      <a href={props.image.links.download}
       target="_blank"
       className='w-28 h-10 text-lg font-semibold text-center p-1 rounded-lg  bg-orange-600 text-white hover:bg-orange-500 '
       >
        Full Image
      </a>

      </div>

    </div>
  );
}

export default individualImage;
