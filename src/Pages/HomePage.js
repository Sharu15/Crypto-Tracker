import React from "react";
import { Suspense } from "react";
import Banner from "../components/Banner/Banner";
// import ErrorFallback from "../components/ErrorBoundary";
const CoinsTable = React.lazy(()=> import("../components/CoinsTable"));

const Homepage = () => {
  return (
    <div>
      <Banner />
      {/* <ErrorFallback FallbackComponent={ErrorFallback} onReset={()=>{}}> */}
      <Suspense fallback ={<div>Loading...</div>}>
      <CoinsTable />
      </Suspense>
      {/* </ErrorFallback> */}
    </div>
  );
};

export default Homepage;
