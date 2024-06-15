<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class acteNaissance extends Model
{
    use HasFactory;
    protected $table = 'acteNaissance'; // Name of the table in the database

    protected $fillable = [
        'nomNaissance',
        'prenomNaissance',
        'dateNaissance',
        'nomPere',
        'nomMere',
        'agePere',
        'ageMere',
        'professionPere',
        'professionMere',
        'lieuParent',
        'regimeMatrimonial',
        'CRNaissance',
        'copieNaissance',
        'prixNaissance',
    ];

    protected $primaryKey = 'idActeNaissance'; // Primary key of the table
    public $incrementing = true; // Auto-incrementing primary key
    public $timestamps = false; // Disable 'created_at' and 'updated_at' timestamps

    // Relationship with Acte table
    public function acte(): BelongsTo
    {
        return $this->belongsTo(acte::class, 'idActe'); // Assuming 'idActe' is the foreign key column
    }

    // Accessors for image fields (CRNaissance, copieNaissance)

    public function getCRNaissanceAttribute()
    {
        if ($this->CRNaissance) {
            return Storage::url($this->CRNaissance); // Generate the image URL
        } else {
            return null;
        }
    }

    public function getCopieNaissanceAttribute()
    {
        // Similar to getCRNaissanceAttribute()
        if ($this->copieNaissance) {
            return Storage::url($this->copieNaissance);
        } else {
            return null;
        }
    }

    // Mutators for image fields (CRNaissance, copieNaissance)

    public function setCRNaissanceAttribute($image)
    {
        // Similar to setCINDemandeurAttribute() in the acte.php model
        if ($image) {
            $path = $image->store('actes_naissances/images');
            $this->CRNaissance = $path;
        }
    }

    public function setCopieNaissanceAttribute($image)
    {
        // Similar to setCRNaissanceAttribute()
        if ($image) {
            $path = $image->store('actes_naissances/images');
            $this->copieNaissance = $path;
        }
    }
}
