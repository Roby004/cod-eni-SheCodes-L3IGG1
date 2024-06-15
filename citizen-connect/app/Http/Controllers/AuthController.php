<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    //authentification à double facteurs
    //fonction auth
    function verifierConnexionCitoyen($numCIN, $nomCitoyen, $prenomCitoyen, $mdpCitoyen)
    {
        // Préparer la requête SQL
        $sql = "SELECT * FROM citoyen WHERE numCIN = :numCIN AND nomCitoyen = :nomCitoyen AND prenomCitoyen = :prenomCitoyen AND mdpCitoyen = :mdpCitoyen";

        // Lier les paramètres aux valeurs saisies par l'utilisateur
        $params = [
            ':numCIN' => $numCIN,
            ':nomCitoyen' => $nomCitoyen,
            ':prenomCitoyen' => $prenomCitoyen,
            ':mdpCitoyen' => $mdpCitoyen
        ];

        // Exécuter la requête et récupérer le résultat
        $result = DB::selectOne($sql, $params);

        // Vérifier si un résultat est trouvé
        if ($result) {
            return true;
        } else {
            return false;
        }
    }
    //fonction send sms

    //fonction generate random code
    public static function generateRandomNumber($length = 6)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randomString = '';

        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, strlen($characters) - 1)];
        }
        // dd($randomString);
        return $randomString;
    }

    //match auth
    function compareRandomNumber($generatedNumber, $userInput)
    {
        $generatedNumber = session('session_code');
        return $generatedNumber === $userInput;
    }

    //match code sms
}
