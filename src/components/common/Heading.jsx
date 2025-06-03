import React from 'react'

const Heading = ({HeadingText,HeadingClass}) => {
  return (
    <div>
      <h1 className={`font-normal text-[64px] max-[500px]:text-[48px] leading-[100%] text-[#3586FF] Franklin ${HeadingClass}`}>{HeadingText}</h1>
    </div>
  )
}

export default Heading
