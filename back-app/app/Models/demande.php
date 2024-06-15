<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class demande extends Model
{
    use HasFactory;
    protected $table = 'demande'; // Name of the table in the database

    protected $fillable = [
        'etat',
        'quantite',
        'paye',
        'dateDemande',
        'raison',
    ];

    protected $primaryKey = 'idDemande'; // Primary key of the table
    public $incrementing = true; // Auto-incrementing primary key
    public $timestamps = false; // Disable 'created_at' and 'updated_at' timestamps

    // Relationship with Acte table
    public function acte(): BelongsTo
    {
        return $this->belongsTo(acte::class, 'idActe'); // Assuming 'idActe' is the foreign key column
    }

    // Relationship with Citoyen table
    public function citoyen(): BelongsTo
    {
        return $this->belongsTo(citoyen::class, 'idCitoyen'); // Assuming 'idCitoyen' is the foreign key column
    }

    // Relationship with ActeMariage, ActeNaissance, ActeDeces tables (HasMany)
    public function actesMariage(): HasMany
    {
        return $this->hasMany(acteMariage::class, 'idDemande'); // Assuming 'idDemande' is the foreign key column in the actes_mariages table
    }

    public function actesNaissance(): HasMany
    {
        return $this->hasMany(acteNaissance::class, 'idDemande'); // Assuming 'idDemande' is the foreign key column in the actes_naissances table
    }

    public function actesDeces(): HasMany
    {
        return $this->hasMany(acteDeces::class, 'idDemande'); // Assuming 'idDemande' is the foreign key column in the actes_deces table
    }
}
