class TicketManager {
  #precioBaseDeGnancia = 0.2; // este es un atributo privado

  constructor() {
    this.eventos = [];
  }

  getEventos = () => {
    return this.eventos;
  };

  agregarEvento(
    nombre,
    lugar,
    precio,
    capacidad,
    fecha = new Date().toLocaleDateString()
  ) {
    const evento = {
      nombre,
      lugar,
      precio: precio + precio * this.#precioBaseDeGnancia,
      capacidad: capacidad || 50,
      fecha,
      participantes: [],
    };

    if (this.eventos.length === 0) {
      evento.id = 1;
    } else {
      evento.id = this.eventos[this.eventos.length - 1].id + 1;
    }

    this.eventos.push(evento);
  }

  agregarUsuario(idEvento, idUsuario) {
    const eventoIndex = this.eventos.findIndex((e) => e.id === idEvento);
    if (eventoIndex === -1) {
      console.log("Evento no encontrado");
      return;
    }

    const usuarioRegistrado =
      this.eventos[eventoIndex].participantes.includes(idUsuario);
    if (usuarioRegistrado) {
      console.log("Usuario ya esta registrado");
      return;
    }

    this.eventos[eventoIndex].participantes.push(idUsuario);
  }

  ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {}
}

const manejadorEventos = new TicketManager();
manejadorEventos.agregarEvento("Evento coder 1", "Argentina", 200, 50);
manejadorEventos.agregarEvento("Evento coder 2", "Chile", 220, 50);
manejadorEventos.agregarEvento("Evento coder 3", "Colombia", 120, 50);
manejadorEventos.agregarUsuario(1, 2);
// manejadorEventos.ponerEventoEnGira(1, "Mexico", "30/11/2024");
console.log(manejadorEventos.getEventos());
