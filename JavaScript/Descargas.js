function Boton(cursoId, nombreId) {
    //Obtener los elementos del DOM
    let checkbox = document.getElementById(cursoId);
    let nombreInput = document.getElementById(nombreId);
    let nombre = nombreInput.value.trim();
    //Verificar si se ha marcado el checkbox y si el nombre no está vacío
    if (!checkbox.checked) {
        alert("Debes marcar la casilla para confirmar que has completado el curso.");
        return;
    }
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre para generar el certificado.");
        return;
    }
    //Crear un nuevo documento PDF con jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(20);
    doc.text("Certificado de Curso", 20, 30);
    doc.setFontSize(14);
    doc.text(`Este certificado se otorga a: ${nombre}`, 20, 40);
    doc.text(`Por completar el curso de: ${cursoId.replace("curso", "")}`, 20, 50);
    doc.text("Agradezco que me hayas escogido para tu formación en este curso. \nEspero que hayas disfrutado y aprendido mucho. ¡Te deseo mucho éxito en tu camino!.", 20, 60);
    //Descargar el archivo PDF
    doc.save(`Certificado_${nombre}_${cursoId.replace("curso", "")}.pdf`);
    alert("Tu certificado se está descargando.");
}