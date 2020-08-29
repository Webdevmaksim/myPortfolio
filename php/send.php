<?php

$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];

$name = $_POST['userName'];
$phone = $_POST['userPhone'];
$token = "1298875026:AAGyZrpFfIhP-ajmaPujbG33NbWQd__C2ow";
$chat_id = "-428930537";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// Load Composer's autoloader
require '../php/PHPMailer.php';
require '../php/SMTP.php';
require '../php/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'thereisnotomorrow1292@gmail.com';                     // SMTP username
    $mail->Password   = 'PuDF7pNf45';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('thereisnotomorrow1292@gmail.com');
    $mail->addAddress('html-url@yandex.by');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новый отклик на портфолио';
    $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userPhone}";

    if ($mail->send()) {
        echo"ok";
    } else {
        echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}