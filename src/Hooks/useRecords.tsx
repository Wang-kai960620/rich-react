import {useEffect, useState} from "react";

type RecordItem = {
  amount: number
  type: "-" | "+"
  tags: string[]
  timeAt?:string
}


const useRecords = () => {
  const [records, setRecord] = useState<RecordItem[]>([]);

  const saveLocal = (record: RecordItem) => {
    setRecord([...records, record]);
  };
  useEffect(()=>{
    window.localStorage.setItem('records', JSON.stringify(records))
  },[records])

  return {records, saveLocal};
};
export {useRecords};