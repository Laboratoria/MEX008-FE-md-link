const getStats = (arr) =>{
  let uniq = [];
  const newArray = arr.filter((current)=>{
    const exists = !uniq[current.href] || false;
    uniq[current.href] = true;
    return exists;
  });
    return newArray.length;
};


module.exports = getStats;
