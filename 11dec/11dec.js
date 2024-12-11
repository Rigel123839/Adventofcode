let input = [1, 24596, 0, 740994, 60, 803, 8918, 9405859];
for (i = 0; i < 10; i++) {
  for (k = 0; k < input.length; k++) {
    let jar = input[k].toString();
    let jarrius = Math.floor(jar.length / 2);

    if (input[k] == 0) {
      input[k] = 1;
    } else {
      if (jarrius * 2 == jar.length) {
        splicedl = jar.slice(0, Math.ceil(jar.length / 2));
        splicedr = jar.slice(Math.floor(jar.length / 2));
        input.splice(k, 1, splicedl, splicedr);
        k++;
      } else {
        input[k] = input[k] * 2024;
      }
    }
    console.log(input);
  }
}
