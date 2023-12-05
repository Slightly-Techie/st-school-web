import useCertificateGenerator from "../../hooks/useCertificateGenerator";
import CertificateInfo from "./CertificateInfo";
import Spinner from "../../utils/Spinner";
import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { encoder } from "../../utils/helpers";

const CertificateTemplate = ({ info, isPublic }) => {
  const { pdfRef, getPdf, loader } = useCertificateGenerator();
  const [isVerified, setIsVerified] = useState(true);

  const [textToCopy, setTextToCopy] = useState("Text to copy");
  const inputRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    if (inputRef.current) {
      inputRef.current.select();
      navigator.clipboard.writeText(textToCopy);
      toast.success("copied to clipboard");
      setIsCopied(true);
    }
  };

  useEffect(() => {
    const generateCertificatePublicLink = encoder(JSON.stringify(info));
    setTextToCopy(
      `${window.location.host}/view/user/certificate/?cert=${generateCertificatePublicLink}`
    );

    console.log("watch info effect ");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {!isPublic && (
        <div className="font-bold text-lg mb-2">
          Cohort: <span>{info?.cohort}</span>
        </div>
      )}
      {!isPublic && (
        <div className="w-full max-w-lg flex flex-row items-center gap-1">
          <input
            className="w-full p-2 px-4 bg-gray-200 focus:outline-none rounded-md"
            placeholder="copy url"
            ref={inputRef}
            type="text"
            value={textToCopy}
            disabled={true}
            onChange={(e) => setTextToCopy(e.target.value)}
          />
          <button
            onClick={handleCopyClick}
            className="max-w-[100px] p-2 w-full bg-gray-900 hover:bg-gray-800 rounded-md text-white font-medium"
          >
            {isCopied ? "copied url" : "copy url"}
          </button>
        </div>
      )}
      <main
        className="container mx-auto py-[3rem] px-[2.5rem] overflow-x-hidden"
        ref={pdfRef}
      >
        <CertificateInfo info={info} />
      </main>
      <div className="flex items-center justify-center mx-auto pt-6 -mt-14 py-3 mb-6 overflow-x-hidden">
       {!isPublic && <button
          className={`text-center px-6 py-3 bg-black hover:bg-[#434343] font-bold transition-all duration-100 text-white ${
            !isVerified ? "hidden" : "block"
          }`}
          onClick={getPdf}
        >
          {loader ? (
            <span>
              Downloading... <Spinner />{" "}
            </span>
          ) : (
            <span>Download</span>
          )}
        </button>}
      </div>
    </div>
  );
};

export default CertificateTemplate;
