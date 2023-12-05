import { useEffect, useState } from "react";
import CertificateTemplate from "../components/Certificate/CertificateTemplate";
import { useLocation } from "react-router-dom";
import { decoder } from "../utils/helpers";

const ViewCertificate = () => {
  const [certificateInfo, setCertificateInfo] = useState(null);
  const { search } = useLocation();

  useEffect(() => {
    const decodeCertificate = decoder(new URLSearchParams(search).get("cert"));
    if (decodeCertificate) {
      const cert = JSON.parse(decodeCertificate);
      setCertificateInfo(cert);
    }
  }, []);

  
  return (
    <div className="container flex justify-center mx-auto">
      {!certificateInfo && (
        <div className="mt-10">
          {" "}
          this url is invalid -{" "}
          <a
            className="text-xs font-medium text-blue-400 hover:text-blue-600"
            href={`${window.location.host}/login`}
          >
            login at slightly techie
          </a>{" "}
        </div>
      )}
      {certificateInfo && (
        <CertificateTemplate info={certificateInfo} isPublic={true} />
      )}
    </div>
  );
};

export default ViewCertificate;
