export default function randomColor() {
  return('#' + parseInt(Math.random() * 0xffffff).toString(16))
}
