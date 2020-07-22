import Layout from "../components/Layout";
import React, {useState} from "react";
import {TitleSection} from "./Money/TitleSection";
import {TagSection} from "./Money/TagSection";
import {NumberSection} from "./Money/NumberSection";
import {useRecords} from "../Hooks/useRecords";
import dayjs from "dayjs";


type Type = "-" | "+"

const defaultFormItem = {
  type: "-" as Type,
  amount: 0,
  tags: [] as string[],
  timeAt: ""
};


function Money() {
  const [selected, setSelected] = useState(defaultFormItem);
  const {saveLocal} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  const submit = () => {
    const newSelected = {...selected, timeAt: dayjs((new Date())).toISOString()};
    if (newSelected.amount === 0) {
      alert("请输入金额");
    } else if (newSelected.tags.length < 1) {
      alert("请选择标签");
    } else {
      saveLocal(newSelected);
      setSelected(defaultFormItem);
    }
  };
  return (
    <Layout>
      <NumberSection value={selected.amount}
                     onChange={(amount) => onChange({amount: amount})}
                     onSave={submit}
      />
      <TagSection value={selected.tags}
                  onChange={(tags) => onChange({tags})}
      />
      <TitleSection value={selected.type}
                    onChange={(type) => onChange({type})}
      />



    </Layout>
  );
}

export default Money;