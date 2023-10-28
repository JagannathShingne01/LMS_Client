function CarouselSlide({image, title, description, slideNumber, totalSlides}){
    return(
        <div id={`slide${slideNumber}`} className="carousel-item relative w-full mx-auto">
        <div className="flex flex-col items-center justify-center  lg:px-[15%]">
            <img src={image} className="w-40 lg:w-80 rounded-xl border-2 border-gray-50 " />
            <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
            <p className="text-lg mx-2 md:text-xl text-gray-200 text-center">{description}</p>
            <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 md:left-5 md:right-5 top-[40%] md:top-1/2 ">
                <a href={`#slide${(slideNumber == 1 ? totalSlides : (slideNumber - 1))}`} className="btn btn-circle">❮</a> 
                <a href={`#slide${(slideNumber) % totalSlides + 1}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    </div> 
    )
}
export default CarouselSlide;