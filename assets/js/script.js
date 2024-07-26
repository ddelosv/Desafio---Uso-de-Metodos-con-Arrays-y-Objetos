// Estructura de datos mediante arreglos y objetos.
var radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY	",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

var dental = [
  {
    hora: "08:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA	HUGO",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

var traumatologia = [
  {
    hora: "08:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "115444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

//  1.Agregar las siguientes horas al arreglo de Traumatología
traumatologia.push(
  {
    hora: "09:00",
    especialista: "RENÉ POBLETE",
    paciente: "ANA GELLONA",
    rut: "13123329-7",
    prevision: "ISAPRE",
  },
  {
    hora: "09:30",
    especialista: "MARIAS SOLAR",
    paciente: "RAMIRO ANDRADE",
    rut: "12221451-K",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL LOYOLA",
    paciente: "CARMEN ISLA",
    rut: "10112348-3",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "ANTONIO LARENAS",
    paciente: "PABLO LOAYZA",
    rut: "13453234-1",
    prevision: "ISAPRE",
  },
  {
    hora: "12:00",
    especialista: "MATIAS ARAVENA",
    paciente: "SUSANA POBLETE",
    rut: "14345656-6",
    prevision: "FONASA",
  }
);
console.log("Se agregan horas al array de Traumatologia: ", traumatologia);

// 2.- Eliminar el primer y último elemento del arreglo de Radiología

radiologia.shift(); //Elimina el primer elemento del arreglo
radiologia.pop(); //Elimina el último elemento del arreglo

console.log("Eliminando primer y ultimo elemento de Radiologia: ", radiologia);

// 3.- Imprimir en la página HTML, mediante document.write y/o las funciones que estime conveniente, la lista de consultas médicas de Dental.
document.write(`<h2>Lista Consultas Medicas Dental</h2>`);
document.write(
  `
            <p>${dental[0].hora} - ${dental[0].paciente} - ${dental[0].rut} - ${dental[0].prevision}</p>
            <p>${dental[1].hora} - ${dental[1].paciente} - ${dental[1].rut} - ${dental[1].prevision}</p>
            <p>${dental[2].hora} - ${dental[2].paciente} - ${dental[2].rut} - ${dental[2].prevision}</p>
            <p>${dental[3].hora} - ${dental[3].paciente} - ${dental[3].rut} - ${dental[3].prevision}</p>
            <p>${dental[4].hora} - ${dental[4].paciente} - ${dental[4].rut} - ${dental[4].prevision}</p>
            <p>${dental[5].hora} - ${dental[5].paciente} - ${dental[5].rut} - ${dental[5].prevision}</p>
            `
);

// 4.- Imprimir un listado total de todos los pacientes que se atendieron en el centro médico.
document.write(`<h2>Listado total de todos los pacientes </h2>`);
document.write(
  `<p>
            ${dental.map((dentales) => dentales.paciente).join("<br>")}<br>
            ${radiologia
              .map((radiologos) => radiologos.paciente)
              .join("<br>")}<br>
            ${traumatologia
              .map((traumatologos) => traumatologos.paciente)
              .join("<br>")}       
        </p>`
);

// 5.- Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental
document.write(
  `<h2>Listado de pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental </h2>`
);
document.write(
  `<p>${dental
    .filter((dental) => dental.prevision === "ISAPRE")
    .map((dentales) => dentales.paciente + " - " + dentales.prevision)
    .join("<br>")}<br> </p>`
);

// 6.- Filtrar y mostar con document.write aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología
document.write(
  `<h2>Listado de pacientes que indican ser de FONASA en la lista de consultas medicas de Traumatologia </h2>`
);
document.write(
  `<p> ${traumatologia
    .filter((traumatologia) => traumatologia.prevision === "FONASA")
    .map(
      (traumatologos) =>
        traumatologos.paciente + " - " + traumatologos.prevision
    )
    .join("<br>")} <br> </p>`
);

// Imprimir los resultados
document.write("<h1>Estadisticas centro medico ñuñoa</h1>");
//imprimir la cantidad de atenciones por especialistas
document.write(
  `<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`
);
document.write(
  `<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`
);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);

//imprimir la primera y la último atención
document.write(`<p>Primera atención ${traumatologia[0].paciente} - ${
  traumatologia[0].prevision
}
| Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${
  traumatologia[traumatologia.length - 1].prevision
}  </p>`);

document.write(`<p>Primera atención ${dental[0].paciente} - ${
  dental[0].prevision
}
| Última atención: ${dental[dental.length - 1].paciente} - ${
  dental[dental.length - 1].prevision
}  </p>`);

document.write(`<p>Primera atención ${radiologia[0].paciente} - ${
  radiologia[0].prevision
}
| Última atención: ${radiologia[radiologia.length - 1].paciente} - ${
  radiologia[radiologia.length - 1].prevision
}  </p>`);

