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
        Schema::create('legalisation', function (Blueprint $table) {
            $table->binary('fichierLegaliser'); // Legalization file as blob
            $table->binary('CRlegal'); // Legalization certificate as blob
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('legalisation');
    }
};
