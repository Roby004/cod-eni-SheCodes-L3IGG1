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
        Schema::table('citoyen', function (Blueprint $table) {
            //$table->foreign('idCommune')->references('idCommune')->on('commune'); // Foreign key to commune table
            $table->foreignId('idCommune')->references('idCommune')->on('commune');
        });
    }
};
