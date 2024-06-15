<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;


use Illuminate\Database\Seeder;
use App\Models\Citoyen;
use Illuminate\Support\Facades\Hash;

class CitoyenSeeder extends Seeder
{
    public function run()
    {
        $citoyen = new Citoyen();
        $citoyen->nomCitoyen = 'John';
        $citoyen->prenomCitoyen = 'Doe';
        $citoyen->emailCitoyen = 'john.doe@example.com';
        $citoyen->numCIN = '123456789';
        $citoyen->contactCitoyen = '1234567890';
        $citoyen->adresseCitoyen = '123 Street, City';
        $citoyen->mdpCitoyen = Hash::make('your_password_here'); // Hashing the password
        $citoyen->idCommune = 1;
        $citoyen->save();
    }
}

