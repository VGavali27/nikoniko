import React from "react";
import { myCustomFont, poppins } from "@/app/layout";
import { Mail, MapPin, Phone } from "lucide-react";
import HomeScreenCarousel from "./HomeScreenCarousel";
import Header from "./Header/Header";
import Link from "next/link";

const iceCreamImages = [
  "https://nikoniko.in/assets/img/Berry-&-Boujee.png",
  "https://nikoniko.in/assets/img/No-sleep-club1.png",
  "https://nikoniko.in/assets/img/Momday-Blues.png",
  "https://nikoniko.in/assets/img/Biscuits-state-of-mind.png",
  "https://nikoniko.in/assets/img/Cookie-&-Co1.png",
  "https://nikoniko.in/assets/img/Blush-protocol.png",
];

const chuskiPopImg = [
  "https://nikoniko.in/assets/img/Peru-Bhabhi.png",
  "https://nikoniko.in/assets/img/Imli-Rani.png",
  "https://nikoniko.in/assets/img/Jamuniya.png",
  "https://nikoniko.in/assets/img/Kairi-Kumari.png",
];

function MainPage() {
  return (
    <>
      <div className="absolute top-0 z-111111111 w-screen fixed">
        <Header />
      </div>

      <div id="home">
        <div className="relative">
          <img
            src="https://nikoniko.in/assets/img/Hero.png"
            alt=""
            className="z-5"
          />
          <div>
            <svg
              className="absolute bottom-0 z-10"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C550,550 1080,0 1440,0 L1440,320 L0,1080 Z"
                fill="#fff"
              ></path>
            </svg>
            <svg
              className="absolute bottom-10"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C500,500 1080,0 1440,5 L1440,320 L0,1080 Z"
                fill="#ca2027"
              ></path>
            </svg>
            <div className="absolute top-10 w-full h-full flex justify-center">
              <div className="w-[35%]">
                <img
                  src="https://nikoniko.in/assets/img/Niko-Niko_Logo-with-signature.png"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="relative z-11" id="about">
          <div className="bg-white flex justify-center z-11">
            <div className=" w-[70%] tms:w-140 lg:w-210 xl:w-270 h-auto">
              <div
                className={`${myCustomFont.className} text-red-500 text-[24px] tms:text-[42px] lg:text-[64px] text-center mb-8`}
              >
                ABOUT KINGS FOODTECH
              </div>
              <div
                className={`${poppins.className} text-[18px] tms:text-[22px] lg:text-[26px]`}
              >
                Kings Foodtech by Kings Global is known for its commitment to
                quality through its brands like Fuji Cream and Kings Everyday,
                offering a variety of ice creams and a wide range of dairy
                products. With a strong focus on excellence, KFT has become a
                trusted name in households, consistently delivering beyond
                expectations.
              </div>
              <div
                className={`${poppins.className} text-[18px] tms:text-[22px] lg:text-[26px] mt-16 pb-12 tms:pb-4 `}
              >
                Now, from the makers of Fuji Cream - the people who’ve been
                there, done that, and done it deliciously - comes a whole new
                scoop of joy.
              </div>
            </div>
          </div>
          {/* <div></div> */}
        </div>
      </>

      <>
        <div className="relative min-h-180 bg-[#f2d9d4]">
          <div className="grid md:grid-cols-[1fr_1fr] ">
            <div className="flex flex-col justify-center items-center ml-10 xl:ml-30">
              <div>
                <div
                  className={`${myCustomFont.className} text-[#ca2027] text-[1.7rem] tms:text-[3rem] text-left mb-8 mt-24`}
                >
                  NIKO NIKO
                </div>
                <div
                  className={`${poppins.className} text-[18px] tms:text-[1.3rem] font-[500] mr-5`}
                >
                  <div>What if ice cream wasn’t just eaten, but felt? </div>
                  <div className="mt-8">
                    Welcome to Niko Niko, Pune’s first handcrafted ice cream
                    brand that turns indulgence into an experience.
                  </div>

                  <div className="mt-8">
                    Every tub opens a world of flavour, personality and story -
                    deliciously human, unapologetically extra.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://nikoniko.in/assets/img/Ice-Crean-Tubs.png"
                alt=""
              />
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_1fr]">
            <div>
              <img
                src="https://nikoniko.in/assets/img/Ice-Crean-Tubs2.png"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center mr-10 xl:mr-30 ml-10">
              <div>
                <div
                  className={`${myCustomFont.className} text-[#ca2027] text-[1.7rem] tms:text-[3rem] text-left mb-8 mt-24`}
                >
                  <div>HANDCRAFTED.</div>
                  <div>NOT MANUFACTURED</div>
                </div>
                <div
                  className={`${poppins.className} text-[18px] tms:text-[1.3rem] font-[500] mr-5`}
                >
                  <div>
                    {" "}
                    Born in Pune and crafted for India, we set out to create
                    artisanal, small-batch delights for those who crave an
                    experience of handcrafted masterpiece. Made in our
                    state-of-the-art facilities in Paithan MIDC, Chhatrapati
                    Sambhajinagar, every tub is a sensory innovation, bursting
                    with real ingredients, real textures and real moments.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_1fr]">
            <div className="flex justify-center items-center ml-10 xl:ml-30 mr-10">
              <div>
                <div
                  className={`${myCustomFont.className} text-[#ca2027] text-[1.7rem] tms:text-[3rem] text-left mb-8 mt-24`}
                >
                  <div>A BRAND THAT FEELS LIKE.</div>
                  <div>YOUR BEST FRIEND</div>
                </div>
                <div
                  className={`${poppins.className} text-[18px] tms:text-[1.3rem] font-[500] mr-5`}
                >
                  <div>
                    {" "}
                    <div className="mb-5">
                      Niko Niko is not just another label on the freezer shelf.
                    </div>
                    <div className="mb-5">
                      We’re your mood booster, content muse and late-night
                      secret keeper.
                    </div>
                    <div>
                      Made for the modern scoop-lover who wants to feel
                      something deliciously real, authentic and always
                      share-worthy.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://nikoniko.in/assets/img/All-tub-poduct.png"
                alt=""
              />
            </div>
          </div>

          <div className="">
            <svg
              className="absolute -top-35 sm:-top-42 md:-top-38 lg:-top-52 z-10"
              viewBox="0 0 1600 500"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                fill="#fff"
                d="
            M0,0 
            H1600 
            V110 
            C1460,150 1350,210 1240,300 
            C1120,400 920,480 700,495 
            C470,510 260,440 110,360 
            C60,335 25,305 0,280 
            Z"
              ></path>
            </svg>
          </div>
          <img
            src="https://nikoniko.in/assets/img/Curve2.png"
            alt=""
            className="absolute -top-20 sm:-top-30 md:-top-25 lg:-top-28 left-0 z-11 w-full"
          />
        </div>
      </>

      <>
        <div className="bg-[#f2d9d4] relative" id="flavour">
          <img
            src="https://nikoniko.in/assets/img/bg-images_2.png"
            alt=""
            className="w-full"
          />
          <div className="absolute top-[16%] md:top-[16%] lg:top-[18%] w-full flex justify-center z-1111">
            <div className="w-full md:w-170 lg:w-270 text-center">
              <div
                className={`${myCustomFont.className} text-[#ca2027] text-[1.6rem] md:text-[3rem] lg:text-[4.5rem] text-center mb-3 md:mb-6`}
              >
                OUR FLAVOUR ETHOS
              </div>
              <div
                className={`${poppins.className} text-[0.7rem] md:text-[1.2rem] lg:text-[1.8rem] font-[500]`}
              >
                We’re building a dessert culture that’s expressive and
                unmistakably
              </div>
              <div
                className={`${poppins.className} text-[0.7rem] md:text-[1.2rem] lg:text-[1.8rem] font-[500]`}
              >
                original for a generation that refuses to be ordinary.
              </div>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="bg-[#f2d9d4] flex justify-center z-11">
          <div className="w-[80%] lg:w-[80%] xl:w-270 h-auto mb-32">
            <div
              className={`${myCustomFont.className} text-[#ca2027] text-[2.5rem] md:text-[4rem] tms:text-[4.5rem] lg:text-[5rem] text-center mb-8`}
            >
              WORLD OF NIKO NIKO
            </div>
            <div
              // text-[3rem] md:text-[4rem] tms:text-[4.5rem] lg:text-[5rem]
              className={`${myCustomFont.className} text-[#ca2027] text-[1.6rem] md:text-[2rem] tms:text-[2.5rem] lg:text-[3rem] text-center mb-8`}
            >
              OUR FLAVOUR PLAYGROUND
            </div>
            <div
              className={`${poppins.className} text-[1.1rem] tms:text-[1.5rem] lg:text-[2rem] font-medium`}
            >
              Fresh Ingredients? Check. Artistry? Always. Feelings? Plenty.
              We’re here to make every flavour a whole mood. Every drip, swirl
              and scoop is made to surprise your taste buds and elevate your
              senses.
            </div>
          </div>
        </div>
      </>

      <>
        <div className="relative bg-[#f2d9d4]">
          <img src="https://nikoniko.in/assets/img/Colour-bg2.png" alt="" />
          <div className="hidden md:block">
            <div className="absolute top-0 left-0 w-[30%]">
              <img
                src="https://nikoniko.in/assets/img/Berry-&-Boujee.png"
                alt=""
              />
            </div>
            <div className="absolute top-0 right-0 w-[30%]">
              <img
                src="https://nikoniko.in/assets/img/No-sleep-club1.png"
                alt=""
              />
            </div>
            <div className="absolute top-[20%] left-[30%] w-[30%]">
              <img
                src="https://nikoniko.in/assets/img/Momday-Blues.png"
                alt=""
              />
            </div>
            <div className="absolute top-[35%] left-0 w-[30%]">
              <img
                src="https://nikoniko.in/assets/img/Biscuits-state-of-mind.png"
                alt=""
              />
            </div>
            <div className="absolute top-[28%] right-16 w-[30%]">
              <img
                src="https://nikoniko.in/assets/img/Cookie-&-Co1.png"
                alt=""
              />
            </div>
            <div className="absolute bottom-[28%] left-[40%] w-[30%]">
              <img
                src="https://nikoniko.in/assets/img/Blush-protocol.png"
                alt=""
              />
            </div>

            <div className="absolute -bottom-[15%] z-10000">
              <img
                src="https://nikoniko.in/assets/img/Tub-with-character.png"
                alt=""
              />
            </div>
          </div>
          <div className="block md:hidden absolute w-full z-111 top-[20%]">
            <HomeScreenCarousel valArr={iceCreamImages} width="50%" />
          </div>
        </div>
      </>
      <>
        <div className="bg-[#f2d9d4] pt-15 relative">
          <div className="hidden md:block">
            <div className="grid grid-cols-[1fr_1fr] mt-20">
              <div>
                <img
                  src="https://nikoniko.in/assets/img/Peru-Bhabhi.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://nikoniko.in/assets/img/Imli-Rani.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div
                className={`${myCustomFont.className} text-[#ca2027] text-[5rem] text-center mb-6`}
              >
                CHUSKI POP
              </div>
              <div className={`text-[black] text-[1.6rem] text-center`}>
                Handcrafted Popsicles
              </div>
            </div>
            <div>
              <div className="grid grid-cols-[1fr_1fr] mt-20">
                <div>
                  <img
                    src="https://nikoniko.in/assets/img/Jamuniya.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://nikoniko.in/assets/img/Kairi-Kumari.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden absolute w-full z-11111111 top-[0%]">
            <HomeScreenCarousel valArr={chuskiPopImg} />
          </div>

          <div className="pb-140" />
        </div>
      </>

      <>
        <div className="relative">
          <img
            src="https://nikoniko.in/assets/img/Colour-bg.png"
            alt=""
            width={"100%"}
          />
          <div className="w-full flex justify-center">
            <div className="absolute -top-[24%] w-[78%]">
              <img
                src="https://nikoniko.in/assets/img/Chuski-pops-set.png"
                alt=""
              />
            </div>
            <div className="absolute left-0 top-0 w-[23%]">
              <img src="https://nikoniko.in/assets/img/Character.png" alt="" />
            </div>
            <div className="absolute bottom-0 right-0 w-[70%]">
              <img src="https://nikoniko.in/assets/img/Character1.png" alt="" />
            </div>
            <div className="absolute -bottom-[25%] left-0 w-[50%]">
              <img src="https://nikoniko.in/assets/img/Star-Icon4.png" alt="" />
            </div>

            <div className="absolute top-0 xs:top-[2%] sm:top-[6%] tms:top-[14%] xl:top-[18%] right-[5%] text-white z-11111 pt-26 xs:pt-33 w-[50%]">
              <div className="flex">
                <div
                  className={`${myCustomFont.className} relative text-[white] text-[1.2rem] tms:text-[2.5rem] lg:text-[4rem] mb-4 tms:mb-10`}
                >
                  OUR MASCOTS
                  <div className="absolute -top-4 tms:-top-10 xl:-top-19 -right-12 tms:-right-20 xl:-right-42 w-14 tms:w-30 xl:w-52">
                    <img
                      src="https://nikoniko.in/assets/img/Love-info.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`${poppins.className} text-[0.6rem] tms:text-[1.1rem] lg:text-[1.5rem] xl:text-[2rem] font-medium`}
                >
                  Every mood deserves its own mascot. At Niko Niko, each
                  character isn’t just an avatar - they’re full-blown digital
                  divas, living, scrolling, storytelling, and serving opinions
                  with flavour.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="bg-[#f2d9d4]">
          <div className="grid tms:grid-cols-[1fr_1fr] pt-80">
            <div
              className={`${poppins.className} text-[1rem] md:text-[1.2rem] tms:text-[1.2rem] lg:text-[2rem] font-medium  pl-10 sm:pl-14 xl:pl-18 lg:pl-30 pr-10`}
            >
              Think of us as flavour futurists. We are committed to adding new
              flavours every season by blending artistry, innovation and just
              the right amount of mischief to keep your taste buds guessing.
            </div>
            <div
              className={`${myCustomFont.className} text-[#ca2027] text-[3rem] text-center py-16 tms:py-4 `}
            >
              <div>SHAPING</div>
              <div>THE FUTURE</div>
              <div>OF FLAVOUR</div>
            </div>
          </div>

          <div className="grid tms:grid-cols-[1fr_1fr]">
            <div>
              <img
                src="https://nikoniko.in/assets/img/Neha-madam_s-signature.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://nikoniko.in/assets/img/Ice-cream-image.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </>

      <>
        <footer
          className="bg-[#ca2027] px-6 py-10"
          style={{ color: "white" }}
          id="contact"
        >
          <div className="flex-col tms:flex-row flex justify-between ">
            <div
              className="hidden tms:flex"
            >
              <Phone size={26} />
              <Link
                href={"tel:18001218787"}
                target="_blank"
                className="hover:text-black inline"
              >
                <div className=" w-40">1800-121-8787 </div>
              </Link>
            </div>

            <div className="text-center ">
              <div>
                Copyright © 2025 | Kings Food Tech | All rights reserved
              </div>
              <Link
                href={"https://maps.app.goo.gl/Jh9xd66R5LGZqUiJ7"}
                target="_blank"
                className="hover:text-black"
              >
                <div className="flex justify-center ">
                  <MapPin size={32} />
                  <div>KINGS FOODTECH PVT. LTD.</div>
                </div>
                <div>
                  Plot No.-B96/1, MIDC Paithan, Mudhalwadi, Taluka-Paithan,
                  Dist.-Chhatrapati Shambhajinagar (Maharashtra) Pin-431148
                </div>
              </Link>
            </div>

            <div className="flex-col xs:flex-row flex justify-between mt-10 tms:mt-0">
              <div className="flex tms:hidden">
                <Phone size={26} />
                <Link
                  href={"tel:18001218787"}
                  className="hover:text-black inline"
                >
                  <div className="w-40">1800-121-8787 </div>
                </Link>
              </div>
              <div className="flex">
                <Mail size={26} />
                <Link
                href={"mailto:care@kingsfoodtech.com"}
              
                className="hover:text-black"
              ><div className="inline">care@kingsfoodtech.com </div></Link>
              </div>
            </div>
          </div>
        </footer>
      </>
    </>
  );
}

export default MainPage;
