// let str = `
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록
// `

// //const regexp = new RegExp('the','gi')
// const regexp = /the/gi
// console.log(str.match(regexp))
//------------------------------
// const regexp = /fox/gi
// console.log(regexp.test(str))

// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

// str = str.replace(regexp, 'AAA')
// console.log(str)
//-------------------------------------
// console.log(str.match(/\.$/gim))
//----------------------------------
// console.log(
//   str.match(/d$/gm),
//   str.match(/^t/gm)
// )
//-----------------------------------
// console.log(
//   str.match(/http/g),
//   str.match(/h..p/g),
//   str.match(/fox|dog/),
// )
//-------------------
// console.log(
//   str.match(/https?/g)
// )
//-------------------------------
// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )
//-------------------------
// console.log(
//   str.match(/[fox]/g),
//   str.match(/[0-9]{1,}/g),
//   str.match(/[가-힣]{1,}/g), 
// )
//------------------------
// console.log(
//   str.match(/\w/g),
//   str.match(/\bf\w{1,}\b/g),
//   str.match(/\d/g),
//   str.match(/\d{1,}/g),
// )

// const h = ` the hello world !

// `
// console.log(
//   h.replace(/\s/g, '')
// )
//-------------------------------------------
const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
console.log(
  str.match(/.{1,}(?=@)/g),
  str.match(/(?<=@).{1,}/g)
  )