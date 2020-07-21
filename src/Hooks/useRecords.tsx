import {useEffect, useState} from "react";
// import {useUpdate} from "./useUpdate";

type RecordItem = {
  amount: number
  type: "-" | "+"
  tags: string[]
  timeAt?:string
}


const useRecords = () => {
  const [records, setRecord] = useState<RecordItem[]>([]);

  // useUpdate(()=>{
  //   setRecord(JSON.parse(window.localStorage.getItem('records') || '[]'))
  // },records)
  useEffect(()=>{
    setRecord(JSON.parse(window.localStorage.getItem('records') || '[]'))
  },[])
  const saveLocal = (record: RecordItem) => {
    setRecord([...records, record]);
  };
  useEffect(()=>{
    window.localStorage.setItem('records', JSON.stringify(records))
  },[records])

  return {records, saveLocal};
};
export {useRecords};