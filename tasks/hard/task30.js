function log10(i) {
  if (i >= 0) {
    console.log(i);
    log10(i - 1);
  }
}
log10(5);