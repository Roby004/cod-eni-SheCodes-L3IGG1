<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('citoyen', function (Blueprint $table) {
            $table->id('idCitoyen')->autoIncrement(); // Primary key with auto-increment
            $table->string('nomCitoyen')->notNullable(); // Non-nullable citizen name
            $table->string('prenomCitoyen')->notNullable(); // Non-nullable citizen first name
            $table->string('emailCitoyen')->nullable();
            $table->string('numCIN')->nullable(); // Nullable email address
            $table->string('contactCitoyen')->notNullable()->unique(); // Unique phone number
            $table->string('adresseCitoyen')->notNullable(); // Non-nullable address
            $table->string('mdpCitoyen'); // Citizen password
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('citoyen');
    }
};
