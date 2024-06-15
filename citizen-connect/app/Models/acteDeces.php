<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class acteDeces extends Model
{
    use HasFactory;
    protected $table = 'acteDeces'; // Name of the table in the database

    protected $fillable = [
        'nomDefunt',
        'dateNDefunt',
        'dateDeces',
        'CINDefunt',
        'ficheDeces',
        'ficheBMH',
        'prixDeces',
    ];

    protected $primaryKey = 'idActeDeces'; // Primary key of the table
    public $incrementing = true; // Auto-incrementing primary key
    public $timestamps = false; // Disable 'created_at' and 'updated_at' timestamps

    // Relationship with Acte table
    public function acte(): BelongsTo
    {
        return $this->belongsTo(acte::class, 'idActe'); // Assuming 'idActe' is the foreign key column
    }

    // Accessors for image fields (CINDefunt, ficheDeces, ficheBMH)

    public function getCINDefuntAttribute()
    {
        if ($this->CINDefunt) {
            return Storage::url($this->CINDefunt); // Generate the image URL
        } else {
            return null;
        }
    }

    public function getFicheDecesAttribute()
    {
        // Similar to getCINDefuntAttribute()
        if ($this->ficheDeces) {
            return Storage::url($this->ficheDeces);
        } else {
            return null;
        }
    }

    public function getFicheBMHAttribute()
    {
        // Similar to getCINDefuntAttribute()
        if ($this->ficheBMH) {
            return Storage::url($this->ficheBMH);
        } else {
            return null;
        }
    }

    // Mutators for image fields (CINDefunt, ficheDeces, ficheBMH)

    public function setCINDefuntAttribute($image)
    {
        // Similar to setCINDemandeurAttribute() in the acte.php model
        if ($image) {
            $path = $image->store('actes_deces/images');
            $this->CINDefunt = $path;
        }
    }

    public function setFicheDecesAttribute($image)
    {
        // Similar to setCINDefuntAttribute()
        if ($image) {
            $path = $image->store('actes_deces/images');
            $this->ficheDeces = $path;
        }
    }

    public function setFicheBMHAttribute($image)
    {
        // Similar to setCINDefuntAttribute()
        if ($image) {
            $path = $image->store('actes_deces/images');
            $this->ficheBMH = $path;
        }
    }
}
