import { useEffect, useState } from "react";
import CertificateTemplate from "../components/Certificate/CertificateTemplate";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { apiUrl, getToken } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const Certificate = () => {
  const { user } = useAuthContext();
  const [certicateInfo, setCertificateInfo] = useState(null);
  const navigate = useNavigate();

  const getCertificateIfExists = async () => {
    try {
      const response = await fetch(`${apiUrl}/certificates/${user?.id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      if (response) return response.json();
    } catch (err) {
      console.log("certificate error ", err);
      toast.error("failed to get cerfificate");
    }
  };

  useEffect(() => {
    getCertificateIfExists()
      .then((cert) => {
        if (!cert?.error) setCertificateInfo(cert);
      })
      .catch((err) => {
        console.warn("error at line 36 ", err);
      });
  }, []);

  return (
    <div className="container flex justify-center mx-auto">
      {!certicateInfo && (
        <div className="mt-10">
          <div className="text-xl font-bold mb-4">Dear {user?.first_name},</div>
          <div className="font-medium"> you currently have no certificates</div>
          <div>Kindly go back and finish your course please</div>
          <button
            onClick={() => navigate("/dashboard", { replace: true })}
            className="p-4 bg-gray-900 text-white hover:bg-gray-800 cursor-pointer rounded-md mt-8 font-medium text-center"
          >
            Finish my course
          </button>
        </div>
      )}
      {certicateInfo && (
        <CertificateTemplate info={certicateInfo} isPublic={false} />
      )}
    </div>
  );
};

export default Certificate;
