let str = "21.2.1.2s,as90"

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
for (let i = 0; i < str.length; i++) {
  let char = str[i]

  if (digits.includes(char)) {
    console.log('\'' + char + "\' É um dígito")
  } else {
    console.log('\'' + char + "\' É uma letra")
  }
}