import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const useCertificateGenerator = () => {
  const [loader, setLoader] = useState(false)
  const pdfRef = useRef()
  const getPdf = () => {
    const input = pdfRef.current
    setLoader(true)
    html2canvas(input, { scale: 4 }).then((canvas) => {
      const capture = canvas.toDataURL('image/png', 0.8)
      const doc = new jsPDF('l', 'mm', 'a4', true)
      doc.addImage(capture, 'PNG', 0, 0, 297, 210, 'FAST')
      setLoader(false)
      doc.save(`slightlyTechie-school-course-completion-certificate.pdf`)
    })
  }
  return { pdfRef, getPdf, loader }
}

export default useCertificateGenerator
