// 2) На входе имеем список строк разной длины. 
// Необходимо написать функцию all_eq(lst), которая вернет новый список из строк одинаковой длины. 
// Длину итоговой строки определяем исходя из самой большой из них. 
// Если конкретная строка короче самой длинной, дополнить ее нижними подчеркиваниями с правого края до требуемого количества символов.
// Расположение элементов начального списка не менять.

// # Тесты
// all_eq(['крот', 'белка', 'выхухоль']) -> ['крот____', 'белка___', 'выхухоль']
// all_eq(['a', 'aa', 'aaa', 'aaaa', 'aaaaa']) -> ['a____', 'aa___', 'aaa__', 'aaaa_', 'aaaaa']
// all_eq(['qweasdqweas', 'q', 'rteww', 'ewqqqqq']) -> ['qweasdqweas', 'q__________', 'rteww______', 'ewqqqqq____']


let arrString = ['крот', 'белка', 'выхухоль']

const all_eq = (arrStr) => {
  // let a = arrStr.sort((a,b) => a.length - b.length)
  // let maxLengthWord = a[a.length - 1].length
  let maxLengthWord = 0
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i].length > maxLengthWord ) {
      maxLengthWord = arrStr[i].length
   }
  }

  let newStringArr = arrStr.map((el) => {
    let num = maxLengthWord - el.length
    
    if (el.length <= maxLengthWord) {
      let elem = el.padEnd(el.length + num, '_')
      
      return elem
    }
    // console.log(elem);
  })

  
  return newStringArr
}


all_eq(arrString)