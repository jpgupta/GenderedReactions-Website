<?php
echo "script loaded..\n";

function rpHash($value)
{
    $hash = 5381;
    $value = strtoupper($value);
    for ($i = 0; $i < strlen($value); $i++) {
        $hash = (($hash << 5) + $hash) + ord(substr($value, $i));
    }
    return $hash;
}

//if (rpHash($_POST['realPerson'].salt) != $_POST['realPersonHash']) {
//    echo "Incorrect captcha";
//}

if (isset($_REQUEST["email"])) {
    $from = $_REQUEST["email"]; // sender
    $subject = "GenderedReactions.com | ".$_REQUEST["subject"];
    $message = "Message from ".$_REQUEST['fullName']."\n".$_REQUEST["message"];
    // message lines should not exceed 70 characters (PHP rule), so wrap it
    $message = wordwrap($message, 70);
    // send mail
    mail("starmate700@gmail.com", $subject, $message, "From: $from\n");
    echo "Thank you for sending us feedback";
}

