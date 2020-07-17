const useTagMap = () => {
  const tagsList = new Map([
    ["日用","useDay", ],
    ["cosmetology", "美容"],
    ["camera", "数码"],
    ["car", "汽车"],
    ["hospital", "医疗"],
    ["eating", "餐饮"],
    ["books", "书籍"],
    ["friends", "社交"],
    ["house", "房贷"],
    ["parent", "长辈"],
    ["traffic", "交通"],
    ["fruit", "果蔬"],
    ["tourism", "旅行"],
    ["phone", "通讯"],
    ["play", "娱乐"],
    ["snacks", "零食"],
    ["pet", "宠物"],
    ["cigarettes", "烟酒"],
    ["clothes", "服饰"],
    ["mother", "母婴"],
    ["home", "住房"],
    ["lottery", "彩票"]
  ]);
  const findName = (name:string)=>{
    return tagsList.get(name)
  }
  return {tagsList,findName}
};
export {useTagMap}