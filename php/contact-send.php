<?php 
	$user_email = "shamrikov.01@gmail.com";
	
	if($_SERVER['REQUEST_METHOD'] == "POST"){

		extract($_POST);

		$name = htmlspecialchars($cf_name);
		$phone = htmlspecialchars($cf_phone);
		$email = htmlspecialchars($cf_email);
		$message = htmlspecialchars($cf_message);
		$subject = isset($cf_subject) ? htmlspecialchars($cf_subject) : "Тест. Contact form";
		$headers = "";
		

		try{

			if(!filter_var($email, FILTER_VALIDATE_EMAIL)) throw new Exception("Ваш адрес электронной почты неверен!");

		}
		catch(Exception $e){

			echo $e->getMessage();
			die();

		}

		try{

			$headers .= 'From: test@test.com' . "\r\n" .
		   			 	'Reply-To: sergey.shamrikov@gmail.com' . "\r\n";
		   	$msg = "Имя: $name\n" . "Email: $email\n" . "Телефон: $phone\n" . "Сообщение: $message";

			if(mail($user_email, $subject, $msg, $headers)){
				throw new Exception("Ваше сообщение было успешно отправлено!");
				header("Location: success.html"); exit;	
			} 
			else throw new Exception("Подключение к серверу не удалось!");

		}
		catch(Exception $e){

			echo $e->getMessage();

		}

	}
	
?>