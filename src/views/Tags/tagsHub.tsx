const useTagMap = () => {
  const tagsList = new Map([
    ["日用", "useDay"],
    ["美容", "cosmetology"],
    ["数码", "camera"],
    ["汽车", "car"],
    ["医疗", "hospital"],
    ["餐饮", "eating"],
    ["书籍", "books"],
    ["社交", "friends"],
    ["房贷", "house"],
    ["长辈", "parent"],
    ["交通", "traffic"],
    ["果蔬", "fruit"],
    ["旅行", "tourism"],
    ["通讯", "phone"],
    ["娱乐", "play"],
    ["零食", "snacks"],
    ["宠物", "pet"],
    ["烟酒", "cigarettes"],
    ["服饰", "clothes"],
    ["母婴", "mother"],
    ["住房", "house"],
    ["彩票", "lottery"]
  ]);
  const findValue = () => {
    return tagsList.values();
  };
  const findKey = ()=>{
    return tagsList.keys()
  }
  const getValue = (value:string)=>{
    return tagsList.get(value)
  }
  return {tagsList, findValue ,findKey,getValue};
};
export {useTagMap};