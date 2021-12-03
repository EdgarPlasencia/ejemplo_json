<?php

include_once 'conexion.php';
$objeto=new Conexion();
$conexion=$objeto->Conectar();

$consulta="SELECT nombre,apellido,cedula,edad FROM json";
$resultado=$conexion->prepare($consulta);
$resultado->execute();
$data=$resultado->fetchAll(PDO::FETCH_ASSOC);

print json_encode($data);
$conexion=null;

?>