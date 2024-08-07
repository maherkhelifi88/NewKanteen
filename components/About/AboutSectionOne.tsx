import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-10 md:pt-20 lg:pt-28">
      <div className="container">


        <div
          className={`wow fadeInUp w-full ${"mx-auto text-center"}`}
          data-wow-delay=".1s"
          style={{ maxWidth: 600, marginBottom: '80px' }}
        >
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          How does Kanteen work?
          </h2>

          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
          Transform your restaurant&apos;s social media presence with our AI-powered video creator, turning videos from your phone into captivating stories.
          </p>
        </div>

       
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-20 lg:w-1/2">

              <SectionTitle
                title="1- Upload your videos"
                number=""
                paragraph="Select and upload high-quality visuals (videos and photos) of your venue showcasing ambiance, products, services, and special features to engage potential customers on social media."
                mb="44px"
              />
            </div>

            <div className="w-full px-20 lg:w-1/2">
              <div
                className=" rounded-md wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/blog/upload.png"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0 rounded-xl"
                />
                <Image
                  src="/images/blog/upload.png"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0 rounded-xl "
                />
              </div>
            </div>
          </div>
     
      </div>
    </section>
  );
};

export default AboutSectionOne;
