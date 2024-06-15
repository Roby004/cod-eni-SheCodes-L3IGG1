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
        Schema::create('acteMariage', function (Blueprint $table) {
            $table->string('nomHomme'); // Husband's name
            $table->string('nomFemme'); // Wife's name
            $table->date('dateNHomme'); // Husband's birth date
            $table->date('dateNFemme'); // Wife's birth date
            $table->string('nomTemoin1'); // Name of first witness
            $table->string('nomTemoin2'); // Name of second witness
            $table->string('dateMariage'); // Marriage date
            $table->string('CRMariage'); // Marriage certificate number
            $table->binary('CINTemoin1'); // Image of first witness's CIN
            $table->binary('CINTemoin2'); // Image of second witness's CIN
            $table->binary('CINHomme'); // Image of husband's CIN
            $table->binary('CINFemme'); // Image of wife's CIN
            $table->binary('CCBHomme'); // Image of husband's birth certificate
            $table->binary('CCBFemme'); // Image of wife's birth certificate
            $table->integer('prixMariage'); // Marriage fee
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('acteMariage');
    }
};
