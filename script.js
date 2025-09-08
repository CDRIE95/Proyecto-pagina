const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

function fibonacci(n) {
    if (n < 0) return "No válido";
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function calcularFibonacci() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = fibonacci(numero);
    document.getElementById("resultado").textContent = 
        `El número Fibonacci en la posición ${numero} es: ${resultado}`;
}
