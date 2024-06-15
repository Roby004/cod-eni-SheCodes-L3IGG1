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
        Schema::create('acte', function (Blueprint $table) {
            $table->id('idActe')->autoIncrement(); // Primary key with auto-increment
            $table->binary('CINDemandeur'); // Image blob for CINDemandeur
            $table->timestamps(); // Created and updated timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('acte');
    }
};
