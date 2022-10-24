const container = document.querySelector('.dc-container');

for(i=1; i<=100; i++){

  const box = document.createElement('div');
  box.className='box';
  

  if( !(i % 3) && !(i % 5)){
    console.log(i , 'multiplo di 3 e 5 --- FizzBuzz');
    box.innerHTML='FizzBuzz';
    box.classList.add('red');
  } else if(!(i % 3)){
    console.log(i , 'multiplo di 3 --- Fizz');
    box.innerHTML='Fizz';
    box.classList.add('acid');
  }else if(!(i % 5)){
    console.log(i , 'multiplo di 5 --- Buzz');
    box.innerHTML='Buzz';
    box.classList.add('green');
  }else{
    console.log(i);
    box.innerHTML=i;
    box.classList.add('salmon');
  }

  container.append(box);
}
