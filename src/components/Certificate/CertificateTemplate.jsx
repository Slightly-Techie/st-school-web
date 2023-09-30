import useCertificateGenerator from '../../hooks/useCertificateGenerator'
import CertificateInfo from './CertificateInfo'
import Spinner from '../../utils/Spinner'
import { useState } from 'react'

const CertificateTemplate = () => {
  const { pdfRef, getPdf, loader } = useCertificateGenerator()
  const [isVerified, setIsVerified] = useState(true)

  return (
    <div className="flex flex-col items-center justify-center">
      <main
        className="container mx-auto py-[3rem] px-[2.5rem] overflow-x-hidden"
        ref={pdfRef}
      >
        <CertificateInfo />
      </main>
      <div className="flex items-center justify-center mx-auto pt-6 -mt-14 py-3 mb-6 overflow-x-hidden">
        <button
          className={`text-center px-6 py-3 bg-black hover:bg-[#434343] font-bold transition-all duration-100 text-white ${
            !isVerified ? 'hidden' : 'block'
          }`}
          onClick={getPdf}
        >
          {loader ? (
            <span>
              Downloading... <Spinner />{' '}
            </span>
          ) : (
            <span>Download</span>
          )}
        </button>
      </div>
    </div>
  )
}

export default CertificateTemplate
