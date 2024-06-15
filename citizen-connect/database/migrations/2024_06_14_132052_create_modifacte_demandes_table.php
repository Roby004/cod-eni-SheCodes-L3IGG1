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
        Schema::table('demande', function (Blueprint $table) {
            $table->foreignId('idActe')->references('idActe')->on('acte'); // Foreign key to actes table
            $table->foreignId('idCitoyen')->references('idCitoyen')->on('citoyen'); // Foreign key to citoyens table

        });
    }
};
