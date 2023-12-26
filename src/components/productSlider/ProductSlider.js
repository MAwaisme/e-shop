import './productSlider.scss'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, thumbsSwiper } from 'swiper'
import { useState } from 'react'

const ProductImagesSlider = ({ thumbnail, images }) => {
    console.log("🚀 ~ file: ProductSlider.js ~ line 8 ~ ProductImagesSlider ~ props", images)
    const [activeThumb, setActiveThumb] = useState()
    console.log("🚀 ~ file: ProductSlider.js ~ line 10 ~ ProductImagesSlider ~ activeThumb", activeThumb)

    return <>
        <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            // thumbs={{ swiper: activeThumb }}
            thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
            className='product-images-slider'
            height={'500px'}
        >
            {
                images?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="product images" className='w-100 h-100 Acitve___slider__main_img' />
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className='product-images-slider__thumbs'
        >
            {
                images?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={item} alt="product images" className='Acitve___slider__Thumbs_img' />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </>
}

ProductImagesSlider.propTypes = {
    images: PropTypes.array.isRequired
}

export default ProductImagesSlider