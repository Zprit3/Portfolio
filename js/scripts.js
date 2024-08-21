$(document).ready(function () {
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();

    if (name === "" || email === "" || message === "") {
      alert("Por favor, completa todos los campos.");
    } else {
      alert("Mensaje enviado correctamente.");
      // Aquí podrías agregar lógica para enviar el formulario vía AJAX o resetear el formulario.
      $(this)[0].reset();
    }
  });


  // Efecto de scroll suave para los enlaces del menú
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
