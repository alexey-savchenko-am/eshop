import React from 'react';
import Directory from "../../components/directory/directory.component";
import './homepage.styles.scss';
import ImageSlider from "../../components/image-slider/image-slider.component";



const HomePage = () => (
    <div className='homepage'>
     {/*   <ImageSlider/>*/}
        <Directory/>
    </div>
);

export default HomePage;