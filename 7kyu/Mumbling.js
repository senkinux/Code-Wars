// Problem link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039// Solution:function accum(s) {  let out = ""  let count = 1  for (let i = 0; i < s.length; i++) {    let ch = s[i]    if (out.length === 0) {      out += ch.toUpperCase()    } else {      out += "-" + ch.toUpperCase() + ch.toLowerCase().repeat(i)    }  }  return out}