<?php 
	$user_email = "support@companyname.com";
	
	if($_SERVER['REQUEST_METHOD'] == "POST"){

		$email = htmlspecialchars($_POST['subscribe_email']);
		$subject = isset($sc_subject) ? htmlspecialchars($sc_subject) : "Joker. Newsletter";

		try{

			if(!filter_var($email, FILTER_VALIDATE_EMAIL)) throw new Exception("Your email address is incorrect!");

		}
		catch(Exception $e){

			echo $e->getMessage();
			die();
		}

		try{

			$headers = 'From: Joker@example.com' . "\r\n" .
		   			 	'Reply-To: Joker@example.com' . "\r\n";
		   	$msg = "Email address: $email";

			if(mail($user_email, $subject, $msg, $headers)) throw new Exception("Your email address has been successfully sent!");
			else throw new Exception("Connection to server is failed!");

		}
		catch(Exception $e){

			echo $e->getMessage();

		}

	}
	
?>