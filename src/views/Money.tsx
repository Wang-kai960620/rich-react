import Layout from "../components/Layout";
import React from "react";
import {TitleSection} from "./Money/TitleSection";
import {TagSection} from "./Money/TagSection";
import {NumberSection} from "./Money/NumberSection";


function Money() {
  return (
    <Layout>
      <TitleSection/>
      <TagSection/>
      <NumberSection/>
    </Layout>
  );
}

export default Money;