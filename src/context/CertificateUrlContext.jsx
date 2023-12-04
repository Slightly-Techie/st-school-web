import React, { createContext, useContext, useState } from "react";

const CertificateUrlContext = createContext()

export const useCertificateUrlContext = () => useContext(certificateUrlContext);

// eslint-disable-next-line react/prop-types
export default function CertificateUrlProvider({ children }) {
 const [certificateUrl, setCertificateUrl] = useState("")

  const state = {
    certificateUrl,
    setCertificateUrl
  };

  return <CertificateUrlContext.Provider value={state}>{children}</CertificateUrlContext.Provider>;
}
