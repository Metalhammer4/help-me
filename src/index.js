module.exports = function count(s, pairs) {
  // your implementation
  const MOD = 1000000007;
  let result = 0, j;
  
 function gcd(n, pairs) {   
  let i = 0;   
  while (i <= pairs.length - 1) {
  m = n % pairs[i][0];
  if (m == 0) 
  i = pairs.length - 1; 
  i++;
}
  return m;
}

function withMod(f, e, mod) {
  if (f + e <= f) 
  f -= (mod - e) % mod;
  else 
  f = (f + e) % mod;
  return f;
}

function sumMod(a, n) {
  let b;
  let sum = 0;
  a %= n;
  for (b = a; b != 0; b >>= 1) {
      if (b & 1) 
          sum = withMod(sum, a, n);
      a = withMod(a, a, n);
  }
  return sum;
}

function power(f, e, mod) {
  let temp;
  if (e === 0) 
  return 1;
  else if (e % 2 === 0) {
    temp = power(f, e / 2, mod) % mod;
    return sumMod(temp, mod);
  } 
  else 
  return (f * power(f, e - 1, mod)) % mod;
}

function calcN() {
	let N = 1;
	pairs.map(x => N *= power(x[0], x[1], MOD));
	return N;
  }
//-----------------------------------------------
if (s == '1' && pairs.map(x => {x[1] == 1})) {
	result = 1;
	pairs.map(x => result *= (x[0] - 1));
    return  result;
  }
  
  if (s =='0' && pairs.map(x => {x[1] == 1})) {
  result = j = 1;
	pairs.map(x => {result *= x[0] - 1; j *= x[0]});
    return  j - result;
  }
  
  if (!s.indexOf('11') && pairs.some(x => x[0] == 2)) 
  return 0; 
	  
  if (pairs.length == 1 && pairs[0][1] > 100) {
    result = power(pairs[0][0], pairs[0][1] - 1, MOD); 
	 return result;
  }
 
  if (pairs.length < 10) {
  numb = calcN();
  for (k = 1; k <= numb; k++) {
	let count = 0;
	j = 0;  
	while (j < s.length)  {
		temp = gcd(k + j, pairs);
		if (s.charAt(j) == 0) { temp == 0 ? count++ : j = s.length}
		if (s.charAt(j) == 1) { temp != 0 ? count++ : j = s.length}
		j++;
	}
	
  if (count == s.length) 
  result++;
  }
 
  return result;
  }   
  }