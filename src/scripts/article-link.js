export default (string) => 
  string
  .toLowerCase()
  .split(' ')
  .join('-');