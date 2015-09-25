<?php 
	$user_email = "support@companyname.com";
	
	if($_SERVER['REQUEST_METHOD'] == "POST"){

		extract($_POST);

		$name = htmlspecialchars($cf_name);
		$email = htmlspecialchars($cf_email);
		$message = htmlspecialchars($cf_message);
		$subject = isset($cf_subject) ? htmlspecialchars($cf_subject) : "Joker. Contact form";
		$headers = "";
		

		try{

			if(!filter_var($email, FILTER_VALIDATE_EMAIL)) throw new Exception("Ваш адрес электронной почты неверен!");

		}
		catch(Exception $e){

			echo $e->getMessage();
			die();

		}

		try{

			$headers .= 'From: Joker@example.com' . "\r\n" .
		   			 	'Reply-To: Joker@example.com' . "\r\n";
		   	$msg = "Name: $name\n" . "Email address: $email\nMessage: $message";

			if(mail($user_email, $subject, $msg, $headers)) throw new Exception("Ваше сообщение было успешно отправлено!");
			else throw new Exception("Подключение к серверу не удалось!");

		}
		catch(Exception $e){

			echo $e->getMessage();

		}

	}
	
?>