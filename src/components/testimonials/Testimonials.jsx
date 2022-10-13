import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/MedRiskLogo.jpg'
import AVTR2 from '../../assets/testimonial_2.jpg'
import AVTR3 from '../../assets/testimonial_3.jpg'
import AVTR4 from '../../assets/testimonial_4.jpg'



import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Medrisk',
    review: "-Customer Focus - Vincent strives to make sure our providers and payers are in the know throughout the scheduling process. Through my auditing of his notes and phone calls, it's great to hear how he genuinely cares about making a difference at SPNet and with patient care. \n -Leadership - He has demonstrated incredible leadership skills throughout this year. Most of our new hires go to him for help and advice while they're learning the workflows. He has also taken on new roles and has been trained in various areas that are helpful to how smooth our team runs."
  },
  {
    avatar: AVTR2,
    name: 'Josh',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium possimus distinctio itaque accusamus, nobis voluptatem quae sint quo aliquid quibusdam mollitia id cupiditate nihil, aliquam magni sit beatae autem repudiandae?'
  },
  {
    avatar: AVTR3,
    name: 'Todd',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium possimus distinctio itaque accusamus, nobis voluptatem quae sint quo aliquid quibusdam mollitia id cupiditate nihil, aliquam magni sit beatae autem repudiandae?'
  },
  {
    avatar: AVTR4,
    name: 'Marie',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium possimus distinctio itaque accusamus, nobis voluptatem quae sint quo aliquid quibusdam mollitia id cupiditate nihil, aliquam magni sit beatae autem repudiandae?'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}

        pagination={{ clickable: true }}

        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials