//  Arreglo Radiología
let radiologia=[
{
hora:'11:00',
especialista: 'Ignacio Schulz',
paciente: 'Francisca Rojas',
rut: '9878782-1',
prevision: 'Fonasa'
},
{     
hora:'11:30',
especialista: 'Federico Subercaseux',
paciente: 'Pamela Estrada',
rut: '15345241-3',
prevision: 'Isapre'
},
{     
hora:'15:00',
especialista: 'Fernando Wurthz',
paciente: 'Armando Luna',
rut: '16445345-9',
prevision: 'Isapre'
},
{      
hora:'15:30',
especialista: 'Ana María Godoy',
paciente: 'Manuel Godoy',
rut: '17666419-0',
prevision: 'Fonasa'
},
{     
hora:'16:00',
especialista: 'Patricia Suazo',
paciente: 'Ramón Ulloa',
rut: '14989389-K',
prevision: 'Fonasa',
},
]

let tabla1='<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>'
for (let i=0; i<radiologia.length ;i++){ tabla1+=
    `<tr>
    <td>${radiologia[i].hora}</td>
     <td>${radiologia[i].especialista}</td>
     <td>${radiologia[i].paciente}</td>
     <td>${radiologia[i].rut}</td>
     <td>${radiologia[i].prevision}</td>
     </tr>`

}
//imprimir el cuadro vacío y llenarlo con la iteración del array radiología.
document.getElementById("tabla-radiologia").innerHTML = tabla1;
//imprimir la primera atención de radiología y su previsión, imprimir la ultima atención de radiología y su previsión
document.getElementById("info-radiologia").innerHTML=`Primera atención: ${radiologia[0].paciente}-${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length-1].paciente}-${radiologia[radiologia.length-1].prevision}.`

//Arreglo Traumatología

let traumatologia=[
{
hora: '08:00',
especialista:'María Paz Altuzarra',
paciente: 'Paula Sánchez',
rut: '15554774-5',
prevision: 'Fonasa'
},
{
hora: '10:00',
especialista:'Raúl Araya',
paciente: 'Angélica Navas',
rut: '15444147-9',
prevision: 'Isapre'
},
{
hora: '10:30',
especialista:'María Arriagada',
paciente: 'Ana Klapp',
rut: '17879423-9',
prevision: 'Isapre'
},
{
hora: '11:00',
especialista:'Alejandro Badilla',
paciente: 'Felipe Mardones',
rut: '1547423-6',
prevision: 'Isapre'
},
{
hora: '11:30',
especialista:'Cecilia Budnik',
paciente: 'Diego Marre',
rut: '16554741-K',
prevision: 'Fonasa'
},
{
hora: '12:00',
especialista:'Arturo Cavagnaro',
paciente: 'Cecilia Méndez',
rut: '9747535-8',
prevision: 'Isapre'
},
{
hora: '12:30',
especialista:'Andrés Kanacri',
paciente: 'Marcial Suazo',
rut: '11254785-5',
prevision: 'Isapre'
},
]
let tabla2=
'<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>'
for (let i=0;i<traumatologia.length;i++){
    tabla2+=
    `<tr>
     <td>${traumatologia[i].hora}</td>
     <td>${traumatologia[i].especialista}</td>
     <td>${traumatologia[i].paciente}</td>
     <td>${traumatologia[i].rut}</td>
     <td>${traumatologia[i].prevision}</td>
     </tr>`
}
//imprimir el cuadro vacío y llenarlo con la iteración del array traumatología
document.getElementById("tabla-traumatologia").innerHTML = tabla2;
//imprimir la primera atención de traumatología y su previsión, imprimir la ultima atención de traumatología y su previsión
document.getElementById("info-traumatologia").innerHTML=`Primera atención: ${traumatologia[0].paciente}-${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length-1].paciente}-${traumatologia[traumatologia.length-1].prevision}.`

// Arreglo Dental
let dental=[
{
hora: '08:30',
especialista:'Andrea Zúñiga',
paciente: 'Marcela Retamal',
rut: '1112345-6',
prevision: 'Isapre',
},
{
hora: '11:00',
especialista:'María Pía Zañartu',
paciente: 'Angel Muñoz',
rut: '9878789-2',
prevision: 'Isapre',
},
{
hora: '11:30',
especialista:'Scarlett Witting',
paciente: 'Mario Kast',
rut: '7998789-5',
prevision: 'Fonasa',
},
{
hora: '13:00',
especialista:'Francisco Von Teuber',
paciente: 'Karin Fernández',
rut: '18887662-K',
prevision: 'Fonasa',
},
{
hora: '13:30',
especialista:'Eduardo Viñuela',
paciente: 'Hugo Sánchez',
rut: '17665461-4',
prevision: 'Fonasa',
},
{
hora: '14:00',
especialista:'Raquel Villaseca',
paciente: 'Ana Sepúlveda',
rut: '14441281-0',
prevision: 'Isapre',
},
]

//imprimir el cuadro vacío y llenarlo con la iteración del array dental
let tabla3=
'<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>'
for (let i=0;i<dental.length;i++){
    tabla3+=
    `<tr>
     <td>${dental[i].hora}</td>
     <td>${dental[i].especialista}</td>
     <td>${dental[i].paciente}</td>
     <td>${dental[i].rut}</td>
     <td>${dental[i].prevision}</td>
     </tr>`
}
//imprimir la primera atención de traumatología y su previsión, imprimir la ultima atención de traumatología y su previsión
document.getElementById("tabla-dental").innerHTML=tabla3
document.getElementById("info-dental").innerHTML=`Primera atención: ${dental[0].paciente}-${dental[0].prevision} | Última atención: ${dental[dental.length-1].paciente}-${dental[dental.length-1].prevision}.`