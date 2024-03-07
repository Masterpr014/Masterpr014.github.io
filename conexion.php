<?php //pega aca tu info como guaraste el archivo sql usuarios asi le puso? pasa cap
// Conexion.php
$servername = "localhost";
$username = "root";
$password = "Tupap@123@123@UwU";//tu contraseña
$database = "usuarios.sql";//el nombre del archivo

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
