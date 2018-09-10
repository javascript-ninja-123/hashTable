

const hash = (key,arrayLen) => {
  let total = 0;
  let PRIME = 31;
  if(typeof key !== 'string') return 'it has to be string'
  for(let i =0; i< Math.min(key.length, 100); i ++){
    total = (total * PRIME + (key.charCodeAt(i) - 96)) % arrayLen;
  }
  return total;
}

class hashTable{
  constructor(size = 53){
    this.keyMap = new Array(size)
  }
  _hash(key){
    let total = 0;
    let PRIME = 31;
    if(typeof key !== 'string') return 'it has to be string'
    for(let i =0; i< Math.min(key.length, 100); i ++){
      total = (total * PRIME + (key.charCodeAt(i) - 96)) % this.keyMap.length;
    }
    return total;
  }
  set(key,value){
    const index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key,value])
  }
  get(key){
    const index = this._hash(key)
    let result;
    if(!this.keyMap[index]) return undefined
    if(this.keyMap[index].length === 1){
      return this.keyMap[index][0][1]
    }
    for(let i = 0; i<this.keyMap[index].length; i++ ){
      if(this.keyMap[index][i][0] === key){
        result = this.keyMap[index][i][1]
      }
    }
    return result;
  }
  //worst time complexity = log(n2)
  keys(){
    if(this.keyMap.length <= 0) return [];
    const result =  this.keyMap.reduce((acc,val) => {
      if(!val) return;
      if(val.length === 0){
        acc.push(val[0][0])
        return acc;
      }
      if(val.length > 0){
        const keys = val.reduce((accu,value) => {
          accu.push(value[0])
          return accu
        },[])
        acc.push(...keys)
        return acc;
      }
      return acc;
    },[])
    return [...new Set(result)]
  }
  //worst time complexity = log(n2)
  values(){
    if(this.keyMap.length <= 0) return [];
    const result =  this.keyMap.reduce((acc,val) => {
      if(!val) return;
      if(val.length === 0){
        acc.push(val[0][1])
        return acc;
      }
      if(val.length > 0){
        const keys = val.reduce((accu,value) => {
          accu.push(value[1])
          return accu
        },[])
        acc.push(...keys)
        return acc;
      }
      return acc;
    },[])

    return [...new Set(result)]
  }
}


const h = new hashTable();

h.set('pink', 'sungmin yi')
h.set('pink', 'dasfasdgds yi')
h.set('blue', 'sungmin yi')
h.set('orange', 24)
h.set('address', '10350 Almayo Ave')
//
// console.log(h.get('blue'))
console.log(h.keys('pink'))
