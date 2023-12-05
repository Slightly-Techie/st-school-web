import logo from '../assets/logo.png'

function GenericFormHeader({ title, subtitle }) {
    return (
      <div className="my-7 space-y-2">
      <img
        src={logo}
        alt="SlightlyTechie's logo"
        className="mb-4 md:my-0 absolute top-[5.5rem] left-2 md:top-5 md:left-6"
      />
        <h1 className="text-3xl md:text-4xl font-bold ">
          {title}
        </h1>
        <p className="text-lg text-[#444444]">
         {subtitle}
        </p>
      </div>
    )
  }
  
  export default GenericFormHeader
  