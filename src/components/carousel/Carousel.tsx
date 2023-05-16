import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const  content = [<div className='px-10 '>
    <p className='text-[20px] lg:text-[25px]'>
       With <span className='font-semibold'>CLARA</span>, I spend more time with my family while I shop from Blenco supermarket online. No more traffic and long queues.
    </p>
     <p className='text-right font-semibold capitalize'>Ken Umar</p>
</div>,
 <div className='px-10 '> 
 <p className='text-[20px] lg:text-[25px]'>
 What I love about  <span className='font-semibold'>CLARA</span> is that I can now order my groceries from stores I love and even order from vendors that share same place with the Supermarket.
</p>
<p className='text-right font-semibold capitalize'>Dr. ken o.</p>
  </div>,
 
 <div className='px-10 '> 
 <p className='text-[20px] lg:text-[25px]'>
 I have been looking for a way to sell online. Since I added my supermarket on <span className='font-semibold'>CLARA</span>, I have enjoyed increase in my sales supermarket by 40% which I couldn't do on my own online.
</p>
<p className='text-right font-semibold capitalize'>Mr. Ugo</p>
</div>,

]


const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};


 const Carousel = () => {

  return <AliceCarousel mouseTracking items={content}
  autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={1500}
        animationType="slide"
        infinite
        touchTracking={false}
        disableDotsControls={false}
    disableButtonsControls={true}
    responsive={responsive}
  />;
};



export default Carousel;
