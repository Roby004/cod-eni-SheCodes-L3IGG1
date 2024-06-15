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
        Schema::create('acteDeces', function (Blueprint $table) {
            $table->string('nomDefunt'); // Deceased's name
            $table->date('dateNDefunt'); // Deceased's birth date
            $table->date('dateDeces'); // Date of death
            $table->binary('CINDefunt'); // Image of deceased's CIN
            $table->binary('ficheDeces'); // Death certificate
            $table->binary('ficheBMH'); // Extract from the birth certificate
            $table->integer('prixDeces'); // Death certificate fee
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('acteDeces');
    }
};
