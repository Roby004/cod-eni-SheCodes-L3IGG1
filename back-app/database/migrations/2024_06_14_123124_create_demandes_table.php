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
        Schema::create('demande', function (Blueprint $table) {
            $table->id('idDemande')->autoIncrement(); // Primary key with auto-increment
            $table->string('etat'); // Request status (pending, approved, rejected)
            $table->integer('quantite'); // Number of copies requested
            $table->boolean('paye'); // Payment status (true/false)
            $table->date('dateDemande'); // Date of request
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('demande');
    }
};
