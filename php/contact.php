<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_subject = 'Form Message';

    $email_body = 'User Name: ' + $name + '\n' +
                  'User Email: ' + $email + '\n\n' +
                  'Message: \n' + $message;

    $to = 'joshfaia@gmail.com';

    mail($to, $email_subject, $email_body); or die("Error!");

echo "message sent";

?>
