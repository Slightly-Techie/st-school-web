const CertificatePattern = () => {
  return (
    <div className="flex items-center justify-between relative">
      {/* Left Pattern */}
      <div className="absolute -top-[1rem]">
        <div className="absolute -left-[17.8rem] -top-[4rem] opacity-90 z-10 h-[20rem] w-[20rem] rotate-[48deg] bg-[#0d97ba]"></div>
        <div className="absolute -left-[17rem] top-[5rem]  opacity-90 z-10 h-[20rem] w-[20rem] rotate-[48deg] bg-[#0d97bab7]"></div>
        <div className="absolute -left-[17rem] top-[16rem] opacity-90 z-10 h-[20rem] w-[20rem] rotate-[48deg] bg-[#0d97ba8f]"></div>
        <div className="absolute -left-[16rem] top-[29rem] opacity-90 z-10 h-[20rem] w-[20rem] rotate-[48deg] bg-[#0d97ba8f]"></div>
      </div>

      {/* Right Pattern */}
      <div className="absolute -right-[14.5rem]">
        <div className="absolute -left-[17rem] -top-[4.2rem] opacity-90 z-10 h-[20rem] w-[20rem] rotate-[48deg] bg-[#0d97ba]"></div>
        <div className="absolute -left-[17rem] top-[5rem]  opacity-90 z-10 h-[20rem] w-[20rem] rotate-[48deg] bg-[#0d97bab7]"></div>
        <div className="absolute -left-[17rem] top-[16rem] opacity-90 z-10 h-[20rem] w-[20rem] rotate-[48deg] bg-[#0d97ba8f]"></div>
        <div className="absolute -left-[20rem] top-[30rem] opacity-90 z-10 h-[20rem] w-[20rem] rotate-[48deg] bg-[#0d97ba8f]"></div>
      </div>
    </div>
  )
}

export default CertificatePattern
