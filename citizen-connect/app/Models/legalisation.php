<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class legalisation extends Model
{
    use HasFactory;
    protected $table = 'legalisation'; // Name of the table in the database

    protected $fillable = [
        'fichierLegaliser',
        'CRlegal',
    ];

    protected $primaryKey = 'idLegalisation'; // Primary key of the table
    public $incrementing = true; // Auto-incrementing primary key
    public $timestamps = false; // Disable 'created_at' and 'updated_at' timestamps

    // Relationship with Acte table
    public function acte(): BelongsTo
    {
        return $this->belongsTo(acte::class, 'idActe'); // Assuming 'idActe' is the foreign key column
    }
}
