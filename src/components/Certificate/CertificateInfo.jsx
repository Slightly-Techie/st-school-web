import logo from '../../assets/st.jpg'
import signature from '../../assets/Signature.png'

const CertificateInfo = () => {
  return (
    <>
      <div className="container border-[35px] py-4 border-[#434343] overflow-x-hidden">
        <div className="flex flex-col items-center justify-center pt-5">
          <img src={logo} alt="" className="w-16 h-12" />
          <h2 className="text-xl py-3">
            Slightly <span className="font-bold">Techie School</span>
          </h2>
          <h1 className="text-4xl font-bold mt-1 text-[#434343]">
            CERTIFICATE OF COURSE COMPLETION
          </h1>
          <h3 className="text-xl pt-1 pb-2">Awarded To</h3>
          <h1 className="text-4xl font-bold mt-2 text-[#434343]">
            PROF. NANA KWESI ASANTE
          </h1>
          <h3 className="text-xl pt-1 pb-2">having successfully completed</h3>
          <h1 className="text-3xl font-bold mt-1 text-[#434343]">
            Basics of Frontend Development
          </h1>
          <h3 className="text-xl pt-1 pb-">on 28th September, 2023</h3>
          <div className="flex items-center justify-around mt-10 w-full">
            <img src={signature} alt="" className="w-[10rem]" />
            <div className="bg-[#EFEFEF] rounded-lg text-right px-7 py-5 text-[#434343]">
              <h3 className="font-bold">CERTIFICATE NO.</h3>
              <p>za4eg85</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CertificateInfo
