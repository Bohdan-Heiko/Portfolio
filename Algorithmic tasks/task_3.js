// 3) Предоставлен список натуральных чисел.Требуется сформировать из них множество.
// Если какое - либо число повторяется, то преобразовать его в строку по образцу: например, если число 4 повторяется 3 раза, то 
// в множестве будет следующая запись: само число 4, строка «44» (второе повторение, т.е.число дублируется в строке),
// строка «444» (третье повторение, т.е.строка множится на 3). Реализуйте вывод множества через функцию set_gen().

// # Тесты
// list_1 = [1, 1, 3, 3, 1]
// list_2 = [5, 5, 5, 5, 5, 5, 5]
// list_3 = [2, 2, 1, 2, 2, 5, 6, 7, 1, 3, 2, 2]
// set_gen(list_1) -> { 1, 3, '111', '33', '11'}    // последовательность вывода не имеет значения
// set_gen(list_2) -> { '5555555', 5, '55', '55555', '5555', '555555', '555'}     // последовательность вывода не имеет значения
// set_gen(list_3) -> { 1, 2, 3, 5, 6, 7, '22', '2222', '22222', '222', '11', '222222'}    // последовательность вывода не имеет значения


let list_1 = [1, 1, 3, 3, 1]
// let list_1 = [2, 2, 1, 2, 2, 5, 6, 7, 1, 3, 2, 2]
// let list_1 = ['petya', 'vasya', 'evgeny']

const set_gen = (arr) => {
  let sort = arr.sort((a, b) => a - b)
  // console.log(sort);
  let result = []
  
  let a = arr[0]
  result[0] = arr[0]

  let counter = 1

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === a) {
      counter = counter + 1
      let str = ''
      for (let i = 1; i <= counter; i++) {
        str = str + a
      }
      // str = str.padEnd(counter, a)
      result.push(str)      
    }
    else {
      a = arr[i]
      result.push(arr[i])
      counter = 1
    }
  }
  return result
}

set_gen(list_1)