import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
// import Footer from "components/Footers/Footer.js";
import Profile from "components/body/Profile.js"

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        {/* <Footer/> */}
        <Profile/>
      </div>
    </>
  );
}

export default Index;
