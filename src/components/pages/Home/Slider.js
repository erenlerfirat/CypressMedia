import { Carousel } from "flowbite-react";

function Slider() {
    return (
        <div className="bg-white dark:bg-gray-800 h-screen flex">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-10/12 max-w-4xl mx-auto my-24 self-center">
                <Carousel slideInterval={4000} >
                    <img src="https://images.pexels.com/photos/8367807/pexels-photo-8367807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
                    <img src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg" alt="..." />
                    <img src="https://images.pexels.com/photos/7015073/pexels-photo-7015073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
                    <img src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" alt="..." />
                    <img src="https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80" alt="..." />
                    <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80" alt="..." />
                </Carousel>
            </div>
        </div>
    );
}
export default Slider;