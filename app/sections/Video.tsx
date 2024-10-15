import React from "react";

const Video = () => {
  // Extract the necessary fields from the data prop

  return (
    <div>
      <section className="py-12 sm:py-16 lg:py-16 xl:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-dirt sm:text-4xl lg:text-6xl">
              Hear a message from our founder
            </h2>
            <p className="mx-auto mt-4 max-w-7xl text-lg font-normal text-dirt sm:text-md lg:text-lg lg:leading-8">
              Every donation counts—whether large or small, it makes an immediate impact on the lives of displaced families. Your generosity supports our efforts to provide emergency relief and work toward rebuilding our communities.
            </p>
          </div>
          <div className="relative pt-8 pb-16 sm:pb-20 lg:pb-12">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/jburHnsx03c?si=Wo52RdTjtKk8-WgK" // Use the URL from the YoutubeLink field
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full max-w-6xl h-full mx-auto aspect-video border-8 border-forest rounded-md "
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="https://www.youtube.com/embed/jburHnsx03c?si=Wo52RdTjtKk8-WgK"
            className="bg-forest text-white hover:bg-dirt py-4 px-12 text-xl font-semibold transition duration-300 ease-in-out rounded-md"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Video;