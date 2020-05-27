function DNAStrand(dna){
  const DNA = {
    A : 'T',
    T : 'A',
    C : 'G',
    G : 'C',
  }
  let res = '';
  for (let i = 0; i < dna.length; i++) {
    res += DNA[dna[i]]
  }
  return res;
}
console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));