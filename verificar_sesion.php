<?php
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['nombre_usuario'])) {
    // Si no ha iniciado sesión, redirigir al lobby o página de inicio de sesión
    header("Location: inicio_sesion.php");
    exit();
}
