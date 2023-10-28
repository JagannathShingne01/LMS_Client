import HomeLayout from "../Layout/HomeLayout";
import aboutImg from "../Assets/aboutMainImage.png"
import img from "../Assets/img1.jpg"
import img2 from "../Assets/img2.jpg"
import img3 from "../Assets/img3.jpg"
import CarouselSlide from "../Components/CarouselSlider";

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
            <div className="pt-14 flex flex-col text-white max-w-7xl mx-auto">
                <div className="flex flex-col-reverse md:flex-row  items-center gap-2 mx-4">
                    <section className="md:w-1/2   ">
                        <h1 className="text-2xl md:text-left md:text-2xl lg:text-5xl text-yellow-500 font-semibold">
                            Lorem ipsum dolor sit.
                        </h1>
                        <p className="text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam temporibus aperiam officiis delectus ea architecto. Non, sint eveniet porro soluta repellendus omnis blanditiis iure dicta? Minima nemo modi sapiente?Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, odit!
                        </p>
                    </section>
                    <div className="md:w-1/2 ">
                        <img id="test1"
                        style={{filter:"drop-shadow(0px 10px 10px rgb(0,0,0))"}}
                        alt="about main image"
                        className="drop-shadow-2xl"
                        src={aboutImg}
                        />
                    </div>
                </div>
                <div className="carousel md:w-1/2 mx-4 md:mx-auto my-10 ">
                    {celebrities && celebrities.map(celb =>  <CarouselSlide {...celb} key={celb.slideNumber} totalSlides={celebrities.length}/>)}
               
                </div>
            </div>
        </HomeLayout>
    )
}

export default AboutUS;