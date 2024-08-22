import imgListJson from "../assets/imageslist.json";
import { useRef, useState } from "react";
import ImageGallery from "./ImageGallery";

const imagesList = imgListJson.list || [];

const CarouselPreview = () => {
  const sliderRef = useRef(null);
  const [nextEnabled, setNextEnabled] = useState(true);
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [showImageGallery, setShowImageGallery] = useState(false);

  const onClickNext = () => {
    const sliderDiv = sliderRef.current;
    const scrollByPixels = 250 + 16; // 250 is image width, and 16 is gap

    setPrevEnabled(true);
    sliderDiv?.scrollBy({
      top: 0,
      left: scrollByPixels,
      behavior: "smooth",
    });
  };

  const onClickPrev = () => {
    const sliderDiv = sliderRef.current;
    const scrollByPixels = 250 + 16; // 250 is image width, and 16 is gap

    setNextEnabled(true);
    sliderDiv?.scrollBy({
      top: 0,
      left: -scrollByPixels,
      behavior: "smooth",
    });
  };

  const onScroll = (_e) => {
    const sliderDiv = sliderRef.current;

    if (sliderDiv?.scrollLeft == 0) {
      setPrevEnabled(false);
    }
    // if (
    //   sliderDiv?.scrollLeft! + sliderDiv?.clientWidth! >=
    //   sliderDiv?.scrollWidth!
    // ) {
    //   setNextEnabled(false);
    // }
    if (
      sliderDiv?.scrollLeft + sliderDiv?.clientWidth >=
      sliderDiv?.scrollWidth
    ) {
      setNextEnabled(false);
    }
  };

  const enableImageGallery = () => {
    setShowImageGallery(true);
  };

  const disableImageGallery = () => {
    setShowImageGallery(false);
  }

  return (
    <>
      <div className="flex flex-col items-start gap-4 mt-20 md:mt-0">
        <div className="flex w-full justify-between">
          <h2 className="text-white text-2xl font-bold font-josefin_sans">
            Latest shots
          </h2>
          <span
            className="mr-8 font-montserrat font-semibold text-sm text-accent filter hover:brightness-75 transition-all cursor-pointer"
            onClick={enableImageGallery}
          >
            View all
          </span>
        </div>
        <div
          ref={sliderRef}
          onScroll={onScroll}
          className="grid grid-flow-col max-w-full overflow-hidden gap-4"
        >
          {/* {imagesList.map((item, index) => {
            return (
              <Image
                className="rounded-md object-cover transition-all"
                key={item}
                src={`/${item}`}
                width={250}
                height={150}
                alt="shot"
              />
            );
          })} */}
          {
            imagesList.map((item,index)=>{
              return <div key={item} className={`h-40 w-64 bg-center bg-cover bg-no-repeat`} style={{
                backgroundImage:`url('/${item}')`
              }}></div>
            })
          }
        </div>
        <div className="w-3/4 mx-auto lg:mx-0 lg:w-20 flex justify-between items-center">
          <svg
            className={`w-7 ${prevEnabled ? "fill-muted" : "fill-white/50"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            onClick={onClickPrev}
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>

          <svg
            className={`w-7 ${
              nextEnabled ? "fill-muted" : "fill-white/50"
            } transform rotate-180`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            onClick={onClickNext}
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </div>
      </div>

      <div className={`fixed top-24 left-0 h-[calc(100vh-96px)] w-screen bg-black/50 py-4 grid lg:grid-cols-5 transition-all opacity-0 pointer-events-none ${showImageGallery && 'pointer-events-auto opacity-100'}`}>
          <div className="col-span-1 hidden lg:block" onClick={disableImageGallery}></div>
          <div className="h-[calc(100vh-96px)] col-span-3">
            <ImageGallery imagesList={imagesList} onClose={disableImageGallery}/>
          </div>
          <div className="col-span-1 hidden lg:block" onClick={disableImageGallery}></div>
        </div>
    </>
  );
};

export default CarouselPreview;
