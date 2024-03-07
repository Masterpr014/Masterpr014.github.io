<?php
// Procesar_login.php
include('Conexion.php');

// Verificar la existencia de datos del sql
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['nombre_usuario']) && isset($_POST['contrasena'])) {
    // Obtener datos del formulario
    $nombre_usuario = $_POST['nombre_usuario'];
    $contrasena = $_POST['contrasena'];

    // Consulta SQL para verificar las credenciales
    $stmt = $conn->prepare("SELECT nombre_usuario, contrasena FROM usuarios WHERE nombre_usuario = ?");
    $stmt->bind_param("s", $nombre_usuario);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($db_nombre_usuario, $db_contrasena);
        $stmt->fetch();

        // Verificar la contraseña
        if (password_verify($contrasena, $db_contrasena)) {
            // Inicio de sesión exitoso, redirigir al usuario a patu.html
            header("Location: ./patu.html");
            exit();
        } else {
            echo "Contraseña incorrecta";
        }
    } else {
        echo "Usuario no encontrado";
    }

    $stmt->close();
} else {
    echo "Datos de inicio de sesión no proporcionados correctamente o método no permitido.";
}

$conn->close();


