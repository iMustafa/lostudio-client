import React from "react";
import dynamic from "next/dynamic";

const NoSSRComponent = dynamic(() => import("../../../components/grapes/no-ssr"), {
  ssr: false,
});

const Page = () => {
  return (<NoSSRComponent />)
}

export default Page