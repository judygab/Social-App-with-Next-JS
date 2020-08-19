import React from "react";
import { AppProps } from "next/app";
import Amplify from 'aws-amplify';
import awsConfig from "../src/aws-exports";

Amplify.configure(awsConfig);

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
