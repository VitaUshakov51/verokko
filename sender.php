<?php

    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $email = $_POST['city'];
    $email = $_POST['comment'];

	$to = "dolchetti@mail.ru";
	$date = date ("d.m.Y");
	$time = date ("h:i");
	$from = "site@dolchetti.ru";
	$subject = "Верокко - Заявка c сайта";


	$msg="
	У вас новая заявка:
    Имя: $name
    Телефон: $phone
    Почта: $email "
    Город: $city "
    Комментарий: $comment ";
	mail($to, $subject, $msg, "From: $from ");

	header('Location:https://ya.ru');
?>
