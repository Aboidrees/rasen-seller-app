import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@assets/css/style.css";
import "@assets/css/colors/default.css";

import Script from "next/script";
import { StoreDetailsProvider } from "./context";

export const metadata = {
  title: "Rasen - Seller Dashboard",
  description: "Generated by create next app",
};

export default function RegisterLayout({ children }) {
  return (
    <html lang="en">
      <Script src="/assets/plugins/jquery/jquery.min.js" />
      <Script src="/assets/plugins/popper/popper.min.js" />
      <Script src="/assets/plugins/bootstrap/js/bootstrap.min.js" />
      <Script src="/assets/js/jquery.slimscroll.js" />
      <Script src="/assets/js/waves.js" />
      <Script src="/assets/js/sidebarmenu.js" />
      <Script src="/assets/plugins/sticky-kit-master/dist/sticky-kit.min.js" />
      <Script src="/assets/plugins/sparkline/jquery.sparkline.min.js" />
      <Script src="/assets/js/custom.min.js" />

      <body>
        <div className="preloader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle
              className="path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        <section
          id="wrapper"
          className="login-register"
          style={{
            backgroundImage: `url(assets/images/background/login-register.jpg)`,
          }}
        >
          <div className="card m-auto w-50">
            <div className="card-body">
              <StoreDetailsProvider>{children}</StoreDetailsProvider>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
