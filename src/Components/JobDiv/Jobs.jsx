import React from 'react';
import {BiTimeFive} from 'react-icons/bi';

const Data = [
  {
    id:1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet, facer assum eruditi an mei, eius malis denique eos at!",
    company: "Novac Linus Co."
  },
  {
    id:2,
    title: "UI Designer",
    time: "14Hrs",
    location: "Manchester",
    desc: "Lorem ipsum dolor sit amet, facer assum eruditi an mei, eius malis denique eos at!",
    company: "Liquis Accessment"
  },
  {
    id:3,
    title: "Software Engineer",
    time: "10Hrs",
    location: "Austria",
    desc: "Lorem ipsum dolor sit amet, facer assum eruditi an mei, eius malis denique eos at!",
    company: "Web Tech Agency"
  },
  {
    id:4,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet, facer assum eruditi an mei, eius malis denique eos at!",
    company: "Novac Linus Co."
  },
  {
    id:5,
    title: "Full-Stack Developer",
    time: "2Days",
    location: "Egypt",
    desc: "Lorem ipsum dolor sit amet, facer assum eruditi an mei, eius malis denique eos at!",
    company: "Software Support"
  },
  {
    id:6,
    title: "Senior UI/UX Designer",
    time: "1Day",
    location: "Iran",
    desc: "Lorem ipsum dolor sit amet, facer assum eruditi an mei, eius malis denique eos at!",
    company: "Digikala"
  },
  {
    id:7,
    title: "Back-End Developer",
    time: "1Hrs",
    location: "Austria",
    desc: "Lorem ipsum dolor sit amet, facer assum eruditi an mei, eius malis denique eos at!",
    company: "Tech Info Co."
  },
  {
    id:8,
    title: "IT Manager",
    time: "14Min",
    location: "Germany",
    desc: "Lorem ipsum dolor sit amet, facer assum eruditi an mei, eius malis denique eos at!",
    company: "Huawei Technologies Co."
  },
]

const Jobs = () => {
  return (
    <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>

      {Data.map(({id, title, time, location, desc, company})=> {
        return (
          <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive />{time}
            </span>
          </span>
          <h6 className='text-[#ccc]'>{location}</h6>
  
          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
          {desc}
          </p>
  
          <div className="company flex item-center gap-2">
            <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
          </div>
  
          <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
            Apply Now
            </button>
  
        </div>
        )
      })}


    </div>
  )
}

export default Jobs