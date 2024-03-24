<?php

    $name = $_POST['firstName'];
	$phone = $_POST['yourPhone'];


	$to = "vitavita-98@yandex.ru";
	$date = date ("d.m.Y");
	$time = date ("h:i");
	$from = "site@verokko.ru";
	$subject = "Верокко - Запрос оптового прайса";


	$msg="
	У вас новая заявка на запрос оптового прайса:
    Имя: $name
    Телефон: $phone";
	mail($to, $subject, $msg, "From: $from ");

	header('Location:https://ya.ru');
?>

