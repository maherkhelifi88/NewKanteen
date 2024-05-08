"use client";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import './styles.css'


const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  const [video, setVideo] = useState<any>(null);
  useEffect(() => {
    //setVideo(<ReactPlayer> </ReactPlayer>)

  })
  return (
    <>
      <section
        id="home"
        className="bg-[#e7edec] dark:bg-gray-dark relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 mt-10 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Introducing Kanteen, an AI-Powered video creator for your restaurant
                </h1>

                <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                Our AI content creator transforms videos from your camera roll into captivating stories for your restaurant&apos;s Social Media.
                </p>


                <div className="-mx-4 flex flex-wrap">


                  <div className="w-1/2 sm:w-1/4 px-1 py-1">
                    <div
                      className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
                      data-wow-delay=".15s"
                    >
                      <div className="relative  items-center justify-center h-[400px]">
                        <iframe
                          src="https://player.vimeo.com/video/920479248?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&controls=0&muted=1&autoplay=1"

                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          title="Hearth"
                        >
                        </iframe>

                      </div>
                    </div>
                  </div>


                  <div className="w-1/2 sm:w-1/4 px-1 py-1">
                    <div
                      className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
                      data-wow-delay=".15s"
                    >
                      <div className="relative items-center justify-center h-[400px] ">
                        <iframe
                          src="https://player.vimeo.com/video/920474921?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&controls=0&muted=1&autoplay=1"

                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          title="mortonssteak"
                        >
                        </iframe>

                      </div>
                    </div>
                  </div>



                  <div className="w-1/2 sm:w-1/4 px-1 py-1">
                    <div
                      className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
                      data-wow-delay=".15s"
                    >
                      <div className="relative  items-center justify-center h-[400px]">
                        <iframe
                          src="https://player.vimeo.com/video/920480495?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&controls=0&muted=1&autoplay=1"

                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          title="maydan"
                        >
                        </iframe>

                      </div>
                    </div>
                  </div>




                  <div className="w-1/2 sm:w-1/4 px-1 py-1">
                    <div
                      className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-4lg" 
                      data-wow-delay=".15s"
                    >
                      <div className="relative items-center justify-center h-[400px]">
                        <iframe
                          src="https://player.vimeo.com/video/920487294?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&controls=0&muted=1&autoplay=1"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          title="mortonssteak"
                        ></iframe>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

              <ModalVideo
                channel="vimeo"
                autoplay={true}
                start={true}
                isOpen={isOpen}
                videoId="915599655"
                onClose={() => setOpen(false)}
              />

              <div className="flex flex-col pt-10 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="#contact"
                  className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  Join our waitlist
                </Link>
              </div>
            </div>
          </div>
        </div>


      </section >
    </>
  );
};

export default Hero;
