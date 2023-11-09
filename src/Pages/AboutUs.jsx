import HomeLayout from "../Layout/HomeLayout";
import aboutImg from "../Assets/aboutMainImage.png"
import img from "../Assets/img1.jpg"
import img2 from "../Assets/img2.jpg"
import img3 from "../Assets/img3.jpg"
import CarouselSlide from "../Components/CarouselSlider";
import { Fade } from "../Helpers/animation";

function AboutUS(){

    const celebrities = [
        {
            title: "Lorem, ipsum.",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestias.",
            image: img,
            slideNumber: 1
        },
        {
            title: "Lorem, ipsum.",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestias.",
            image: img2,
            slideNumber: 2
        },
        {
            title: "Lorem, ipsum.",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestias.",
            image: img3,
            slideNumber: 3
        },
    ]

    return(
        <HomeLayout>
            <div className="pt-14 flex flex-col text-black max-w-7xl mx-auto">
                <div className="flex flex-col-reverse md:flex-row  items-center gap-2 mx-4 bg-secondary px-5 pb-7 rounded-sm">
                    
                    <section className="md:w-1/2   ">
                        <h1 className="text-2xl md:text-left md:text-2xl lg:text-5xl text-primary font-semibold">
                        About Us
                        </h1>
                        <Fade>
                        <p className="text-base pt-5">
                        Coursify's mission is to permeate through every student/professional's outlook towards jobs and change their attitude and perspective from "How Can I Do It?" to "Of Course I Can Do It". We aim to do this by providing exceptional up skilling courses at affordable rates, while being tech-forward so anyone, anywhere can access and improve their ability to be successful in life.                        </p>
                        </Fade>
                    </section>
                    <div className="md:w-1/2 ">
                        <img id="test1"
                        style={{filter:"drop-shadow(0px 10px 10px white)"}}
                        alt="about main image"
                        className="drop-shadow-2xl md:pl-10"
                        src={aboutImg}
                        />
                    </div>
                </div>
                <div className="carousel md:w-1/2 mx-4 md:mx-auto my-10 ">
                    {celebrities && celebrities.map(celb =>  <CarouselSlide {...celb} key={celb.slideNumber} totalSlides={celebrities.length}/>)}
               
                </div>
                {/* <div className="flex justify-center items-center text-5xl ">
                    Our Services
                </div> */}
                {/* <section>
                    <img src="" alt="" />
                        <h1>Affordable online courses</h1>
                        <p>Affordable online courses along with learning communities.</p>
                </section> */}
            </div>
        </HomeLayout>
    )
}

export default AboutUS;