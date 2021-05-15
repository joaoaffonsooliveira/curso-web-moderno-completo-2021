let isAtivo = true;
console.log(isAtivo);

isAtivo = false;
console.log(isAtivo);

console.log('Os Verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'Texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('Os Falsos...')
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Para Finalizar...');
console.log(!!('' || null || 0 || ' ')); // retorna true se pelo menos um for verdadeiro. 

let nome = 'Lucas';
console.log(nome || 'Lucas'); //Lucas (true) e nome (false)