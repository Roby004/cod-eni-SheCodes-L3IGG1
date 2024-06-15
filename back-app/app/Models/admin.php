<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class admin extends Model
{
    use HasFactory;
    protected $table = 'admin'; // Name of the table in the database

    protected $fillable = [
        'nomAdmin',
        'prenomAdmin',
        'mdpAdmin',
        'emailAdmin',
        'contactAdmin',
        'idCommune',
    ];

    protected $primaryKey = 'idAdmin'; // Primary key of the table
    public $incrementing = true; // Auto-incrementing primary key
    public $timestamps = false; // Disable 'created_at' and 'updated_at' timestamps

    // Relationship with Commune table
    public function commune(): BelongsTo
    {
        return $this->belongsTo(commune::class, 'idCommune'); // Assuming 'idCommune' is the foreign key column
    }
}
