<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SmsController extends Controller
{
    public function sendSms()
    {
        $basic  = new \Vonage\Client\Credentials\Basic("44c27f98", "UTMazUh3orFri4Df");
        $client = new \Vonage\Client($basic);
        $response = $client->sms()->send(
            new \Vonage\SMS\Message\SMS("261345940167", 'CitizenConnect', 'Code auth:')
        );

        $message = $response->current();
        $code = AuthController::generateRandomNumber();
        session()->put('session_code', $code);
        $codeP = "Code auth: " .  session('session_code');

        if ($message->getStatus() == 0) {
            echo "The message was sent successfully\n";
        } else {
            echo "The message failed with status: " . $message->getStatus() . "\n";
        }
    }
}
