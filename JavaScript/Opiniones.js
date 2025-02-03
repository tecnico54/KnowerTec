//Cargar comentarios desde localStorage al cargar la página
    function loadComments() {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        const commentsContainer = document.getElementById('commentsContainer');
        commentsContainer.innerHTML = ""; //Limpiar comentarios previos
        comments.forEach((comment, index) => {
        const commentBox = document.createElement('div');
        commentBox.classList.add('comment-box');
        commentBox.innerHTML = `
        <h3>Nombre: ${comment.name}<br>Email: ${comment.email}</h3>
        <p><b>${comment.message}</b></p>
        <button style="cursor: pointer; background: #26e; box-shadow: 5px 5px 2px 0 #000;" onclick="editComment(${index})">Editar</button>
        <button style="cursor: pointer; margin-left: 10px; background: rgb(255, 0, 0); box-shadow: 5px 5px 2px 0 #000;" onclick="deleteComment(${index})">Eliminar</button>
        `;
        commentsContainer.appendChild(commentBox);
        });
    }
    //Enviar comentario (guardar en localStorage)
      function submitComment() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
            if (name && email && message) {
                const newComment = { name, email, message };
                let comments = JSON.parse(localStorage.getItem("comments")) || [];
                comments.unshift(newComment); //Agrega el nuevo comentario al inicio
                localStorage.setItem("comments", JSON.stringify(comments)); //Guardar en localStorage
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value = "";
                loadComments(); //Recargar los comentarios
            } else {
                alert('Por favor, llena todos los campos.');
            }
        }
        //Editar comentario
        function editComment(index) {
            let comments = JSON.parse(localStorage.getItem("comments")) || [];
            const comment = comments[index];
            //Rellenar los campos del formulario con el comentario a editar
            document.getElementById('name').value = comment.name;
            document.getElementById('email').value = comment.email;
            document.getElementById('message').value = comment.message;
            //Eliminar el comentario original antes de editarlo
            comments.splice(index, 1);
            localStorage.setItem("comments", JSON.stringify(comments));
            loadComments(); //Recargar los comentarios después de eliminar el original
        }
        //Eliminar comentario
        function deleteComment(index) {
            let comments = JSON.parse(localStorage.getItem("comments")) || [];
            comments.splice(index, 1); //Elimina el comentario según su índice
            localStorage.setItem("comments", JSON.stringify(comments)); // Actualizar localStorage
            loadComments(); //Recargar la lista de comentarios
        }
        //Cargar comentarios al cargar la página
        loadComments();