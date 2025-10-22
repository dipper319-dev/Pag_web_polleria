function mostrarPromocion() {
  const promociones = [
    "🔥 Pollo entero + papas + gaseosa por solo $32.000",
    "🍗 Medio pollo + papas gratis todos los martes",
    "🎉 2 pollos enteros por $55.000 este fin de semana",
    " 2 combos de alitas de pollo por solo 22.000 por este mes"
  ];
  const promo = promociones[Math.floor(Math.random() * promociones.length)];
  alert(promo);
}
