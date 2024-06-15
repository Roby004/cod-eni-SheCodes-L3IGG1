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
        Schema::create('acteNaissance', function (Blueprint $table) {
            $table->string('nomNaissance'); // Child's last name
            $table->string('prenomNaissance'); // Child's first name
            $table->date('dateNaissance'); // Child's birth date
            $table->string('nomPere'); // Father's name
            $table->string('nomMere'); // Mother's name
            $table->string('agePere'); // Father's age
            $table->string('ageMere'); // Mother's age
            $table->string('professionPere'); // Father's profession
            $table->string('professionMere'); // Mother's profession
            $table->string('lieuParent'); // Parents' address
            $table->string('regimeMatrimonial'); // Parents' marital status
            $table->binary('CRNaissance'); // Birth certificate number
            $table->binary('copieNaissance'); // Copy of birth certificate
            $table->integer('prixNaissance'); // Birth certificate fee
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('acteNaissance');
    }
};
