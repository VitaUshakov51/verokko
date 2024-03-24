<?php

    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $city = $_POST['city'];
    $comment = $_POST['comment'];

	$to = "vitavita-98@yandex.ru";
	$date = date ("d.m.Y");
	$time = date ("h:i");
	$from = "site@verokko.ru";
	$subject = "Верокко - Заявка c сайта";


	$msg="
	Вам новый вопрос по мармеладу:
    Имя: $name
    Телефон: $phone
    Почта: $email
    Город: $city
    Комментарий: $comment ";
	mail($to, $subject, $msg, "From: $from ");

	header('Location:https://ya.ru');
?>

