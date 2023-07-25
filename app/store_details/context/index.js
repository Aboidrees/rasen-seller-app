"use client";
import React, { createContext, useState, useContext } from "react";

const StoreDetailsContext = createContext({
  step: 1,
  minusStep: (/** @type {any} */ any) => any,
  plusStep: (/** @type {any} */ any) => any,
  saveStoreNameAndDetails: (/** @type {any} */ any) => any,
  saveStoreAddress: (/** @type {any} */ any) => any,
  saveStoreLicense: (/** @type {any} */ any) => any,
  saveStoreLogoAndBackground: (/** @type {any} */ any) => any,
});

export function StoreDetailsProvider({ children }) {
  const [step, setStep] = useState(1);

  const plusStep = () => setStep(step + 1);
  const minusStep = () => setStep(step - 1);

  const saveStoreNameAndDetails = () => {};
  const saveStoreAddress = () => {};
  const saveStoreLicense = () => {};
  const saveStoreLogoAndBackground = () => {};

  return (
    <StoreDetailsContext.Provider
      value={{
        step,
        plusStep,
        minusStep,
        saveStoreNameAndDetails,
        saveStoreAddress,
        saveStoreLicense,
        saveStoreLogoAndBackground,
      }}
    >
      {children}
    </StoreDetailsContext.Provider>
  );
}

export const useStoreDetailsContext = () => useContext(StoreDetailsContext);
