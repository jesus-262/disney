import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../estilo/ImageSlider.css"
import { motion } from "framer-motion"
import React,{useState} from 'react'
import { BiChevronRight,BiChevronLeft } from "react-icons/bi";

export const MyComponent = () => (
  <motion.div
    animate={{ scale: 2 }}
    transition={{ duration: 0.5 }}
  />
)
const Animate={
  scale: [1, 2, 2, 1, 1],
  rotate: [0, 0, 270, 270, 0],
  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
}


function SampleNextArrow({onClick}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div animate={Animate} className="arrow arrow-right" onClick={onClick}>
      <BiChevronRight ></BiChevronRight>
    </motion.div>
    
  );
}

function SamplePrevArrow({onClick}) {
 
  return (
    <motion.div className="arrow arrow-left" onClick={onClick}>
      <BiChevronLeft></BiChevronLeft>
    </motion.div>
  );
}

const ImageSlider = ({images}) => {
  //animate={Animate}
  const [slideIndex, setslideIndex]=useState(0)
  var [isOpen, setIsOpen] = useState(false)

  function next() {
    console.log("next")
  
  
   
   
  }
  function previous() {
    console.log("previus")
   // this.slider.slickPrev();
  }
  function ssetIsOpen() {
    isOpen = !isOpen
    console.log(isOpen)
   // this.slider.slickPrev();
  }
  const settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
    
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
     
      
      beforeChange:(current,next)=>setslideIndex(next),
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
   
  };
  const variants = {
    open: { opacity: 1, x: 0 ,y:-450, scale: 1},
    closed: { opacity: 1, x: 500, y:-450, scale: 0.5},
  }
  const variants2 = {
    open: { opacity: 1, x: 0 ,y:-320, scale: 0.8},
    closed: { opacity: 1, x: 410, y:-500, scale: 0.3},
  }
  const variants3 = {
    open: { opacity: 1, x: 200 ,y:-500, scale: 0.8},
    closed: { opacity: 1, x: 430, y:-750, scale: 0.3},
  }
  const variants4 = {
    open: { opacity: 1, x: 1000 ,y:-900, scale: 1.5},
    closed: { opacity: 1, x: 660, y:-1000, scale: 0.8},
  }
  

   
    if(slideIndex==0) {
      isOpen=true;
    }
    if(slideIndex==1) {
      isOpen=false;
    }
    if(slideIndex==2) {
      isOpen=true;
    }
  
  console.log(slideIndex);
 
  return (
    <>
    
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item,index) => (
            <div  className={index=== slideIndex?'slide  slide-active  icon-active': 'slide '} key={item.id}>
              <img src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
       
        <motion.div className="icon-1" animate={isOpen ? "open" : "closed"}  variants={variants} ><img src={require('../icon/comp-anime-2-2-disney.png')}  alt={"comp-anime-2-2-disney"} /></motion.div>
        <motion.div className="icon-1" animate={isOpen ? "open" : "closed"}  variants={variants2} ><img src={require('../icon/comp-anime-1-3-disney.png')}  alt={"comp-anime-1-3-disney"} /></motion.div>
        <motion.div className="icon-2" animate={isOpen ? "open" : "closed"}  variants={variants3} ><img src={require('../icon/comp-anime-1-4-disney.png')}  alt={"comp-anime-1-4-disney"} /></motion.div>
        <motion.div className="icon-2" animate={isOpen ? "open" : "closed"}  variants={variants4} ><img src={require('../icon/comp-anime-1-2-disney.png')}  alt={"comp-anime-1-2-disney"} /></motion.div>
       
       
        
      </div>
          </>
  )
}
export default ImageSlider;