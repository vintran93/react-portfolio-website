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
    name: 'Medrisk - Current Employer',
    review: "-Customer Focus - Vincent strives to make sure our providers and payers are in the know throughout the scheduling process. Through my auditing of his notes and phone calls, it's great to hear how he genuinely cares about making a difference at SPNet and with patient care. \n -Leadership - He has demonstrated incredible leadership skills throughout this year. Most of our new hires go to him for help and advice while they're learning the workflows. He has also taken on new roles and has been trained in various areas that are helpful to how smooth our team runs. \n -Innovation - Vincent is always trying to find ways that our team can improve or run better. He is exceptional in being the best he can be to make sure we are reliable compared to other vendors. \n -One Team - Our rep has built strong connections with our team members. Everyone feels comfortable with his support and respects him as a colleague. \n -Accountability - While Vincent is our most reliable rep and rarely makes mistakes that need to be addressed, in past situations where improvement is needed, he took responsibility for the actions taken on his part. He does not make excuses and always wants to see himself grow into the best team member possible. \n -Employee of the year - I could not think of a more deserving candidate. As team lead for our SPNet team, I have seen nothing short of incredible effort, high standards of work, and incorporating all of our core values into what he does. (We agree)… that our year would not have been as successful without him. On top of all his fantastic work, he is kind, understanding, and displays effort to make a difference in people's lives."
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