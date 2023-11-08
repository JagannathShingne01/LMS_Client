import React from "react";

const data = [
    {
      title: "Decades of Hands-On Experience",
      description:
        "We've been in the industry long enough to understand the challenges you face. Our practical knowledge helps us provide advice that's grounded in real-world situations.        ",
      icon: (props) => (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-primary"
            height="3em"
            viewBox="0 0 512 512"
          >
            <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z" />
          </svg>
        </div>
      ),
    },
    {
      title: "Trusted Connections",
      description:
        "Over the years, we've built relationships with reliable manufacturers and suppliers. This network ensures that the equipment we offer is of the highest quality, sourced from trusted sources.",
      icon: (props) => (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-primary"
            height="3em"
            viewBox="0 0 640 512"
          >
            <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H516h-4-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48V304c0 26.5 21.5 48 48 48H156.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z" />
          </svg>
        </div>
      ),
    },
    {
      title: "Personalized Support      ",
      description:
        "We know every project is unique. That's why our team works closely with you, understanding your specific requirements. Our advice and solutions are tailored to your project, ensuring you get exactly what you need.",
      icon: (props) => (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-primary"
            height="3rem"
            viewBox="0 0 640 512"
          >
            <path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160h44.8c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V348.3c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6V464c0 26.5-21.5 48-48 48H496c-26.5 0-48-21.5-48-48V391.2l47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240v32h96V240c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V336H272v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z" />
          </svg>
        </div>
      ),
    },
  ];
  
  
  const Features = () => {
    return (
      <div className="bg-secondary py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 lg:mt-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="pt-2 pb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What Sets Us Apart
            </h2>
          </div>
        </div>
        <div className="mx-auto  mt-6 max-w-2xl sm:mt-8 lg:mt-6 lg:max-w-7xl ">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3  text-center place-items-center mx-auto">
            {data.map((data) => (
              <div
                key={data.title}
                className="flex flex-col hover:bg-white/50 h-full backdrop-blur-xl rounded-xl p-4 group duration-300 transition-colors"
              >
                <dt className="text-xl pt-2 pb-1 font-semibold leading-7 text-primary">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg group-hover:scale-110  mx-auto">
                  <data.icon className="h-9 w-9 " aria-hidden="true" />
                </div>
                  {data.title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 ">
                  <p className="flex-auto text-black/70">{data.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  };
  
  export default Features;