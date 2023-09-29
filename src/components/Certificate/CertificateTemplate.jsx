import useCertificateGenerator from '../../hooks/useCertificateGenerator'
import CertificateInfo from './CertificateInfo'

const CertificateTemplate = () => {
  const { pdfRef, getPdf, loader } = useCertificateGenerator()
  return (
    <>
      <main className="py-[3rem] px-[4rem] relative" ref={pdfRef}>
        <CertificateInfo />
      </main>
      <div className="flex items-center justify-center pt-6 absolute top-[40rem] left-[30rem] mb-6">
        <button
          className="text-center px-6 py-3 bg-black hover:bg-[#434343] font-bold transition-all duration-100 text-white"
          onClick={getPdf}
        >
          {loader ? <span>Downloading...</span> : <span>Download</span>}
        </button>
      </div>
    </>
  )
}

export default CertificateTemplate
