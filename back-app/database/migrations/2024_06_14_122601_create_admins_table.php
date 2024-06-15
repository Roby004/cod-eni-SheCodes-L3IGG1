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
        Schema::create('admin', function (Blueprint $table) {
            $table->id('idAdmin')->autoIncrement(); // Primary key with auto-increment
            $table->string('nomAdmin')->notNullable(); // Non-nullable admin name
            $table->string('prenomAdmin')->notNullable(); // Non-nullable admin first name
            $table->string('mdpAdmin'); // Admin password
            $table->string('emailAdmin')->unique(); // Unique admin email address
            $table->string('contactAdmin')->nullable(); // Nullable admin contact number
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admin');
    }
};
