export const calculateDateDifference = (date) =>{
  let difference =  new Date().getTime() - new Date(date).getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
}

export const sortItem = (item) => {

const fr =  item.sort((a, b) => {
    let _a = new Date(b.createdAt);
    let _b = new Date(a.createdAt);
    return _a === _b ? 0 : _a > _b ? 1 : -1;
  })
 return fr;
}

export function groupByKey(array, key) {
  return array
    .reduce((hash, obj) => {
      if(obj[key] === undefined) return hash; 
      return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
    }, {})
}


// let sortedItem = listItem.sort((a, b) => {
//   let _a = new Date(b.createdAt);
//   let _b = new Date(a.createdAt);
//   return _a === _b ? 0 : _a > _b ? 1 : -1;
// });

//  export const groupBy = function(prop) {
//   return this.reduce(function(groups, item) {
//   const val = item[prop]
//   groups[val] = groups[val] || []
//   groups[val].push(item)
//   return groups
//   }, {})
// };
