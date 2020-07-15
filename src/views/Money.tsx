import Layout from "../components/Layout";
import React, {useState} from "react";
import {TitleSection} from "./Money/TitleSection";
import {TagSection} from "./Money/TagSection";
import {NumberSection} from "./Money/NumberSection";

type Type = "-" | "+"

function Money() {
  const [selected, setSelected] = useState({
    type: "-" as Type,
    amount: 0,
    tags: [] as string[],
  });
  const onChange = (obj:Partial<typeof selected>) => {
setSelected({...selected,...obj})
  };
  return (
    <Layout>
      <TitleSection value={selected.type}
                    onChange={(type) => onChange({type})}
      />
      <TagSection value={selected.tags}
                  onChange={(tags) => onChange({tags})}
      />
      <NumberSection onChange={(amount) => onChange({amount:amount})}
      />
    </Layout>
  );
}

export default Money;