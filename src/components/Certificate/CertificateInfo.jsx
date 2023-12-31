import logo from "../../assets/st.jpg";
import signature from "../../assets/Dadson_signature.png";
import CertificatePattern from "./CertificatePattern";
import { CERTIFICATE_INFO } from "../../data/certificate";
import { useAuthContext } from "../../context/AuthContext";
import { formatTimestamp, getFullName } from "../../utils/helpers";

const CertificateInfo = ({ info }) => {

  const { certificate_number, completion_date, user } = info;

  return (
    <>
      <div className="w-[70dvw] border-[5px]  py-4 border-[#0d97ba] overflow-hidden relative">
        <CertificatePattern />
        <div className="flex flex-col items-center justify-center pt-5">
          <img src={logo} alt="" className="w-16 h-12" />
          <h2 className="text-xl py-3">
            Slightly <span className="font-bold">Techie School</span>
          </h2>
          <h1 className="text-7xl font-extrabold mt-[0.5rem] text-[#434343]">
            CERTIFICATE
          </h1>
          <h3 className="text-2xl my-2">OF COURSE COMPLETION</h3>
          <h3 className="text-xl py-1">Awarded To</h3>
          <h1 className="text-4xl font-bold mt-1 text-[#434343]">
            {getFullName(user?.first_name, user?.last_name)}
          </h1>
          <h3 className="text-xl pt-1 pb-2">having successfully completed</h3>
          <h1 className="text-2xl font-bold mt-4 text-[#0d97ba]">
            Basics of {user?.stack_option.name}
          </h1>
          <h2>{user?.stack_option.stack.name} track</h2>
          <h3 className="text-xl pt-1 pb-">
            <span>on</span> <span>{formatTimestamp(completion_date) || completion_date || new Date().toString()}</span>
          </h3>
          <div className="flex items-center justify-evenly mt-10 mb-5 w-full">
            <img src={signature} alt="" className="w-[10rem]" />

            <div className="bg-[#EFEFEF] rounded-lg text-right px-7 py-5 text-[#434343]">
              <h3 className="font-bold">CERTIFICATE ID.</h3>
              <p>{certificate_number}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateInfo;
