<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class acteMariage extends Model
{
    use HasFactory;
    protected $table = 'acteMariage'; // Name of the table in the database

    protected $fillable = [
        'nomHomme',
        'nomFemme',
        'dateNHomme',
        'dateNFemme',
        'nomTemoin1',
        'nomTemoin2',
        'dateMariage',
        'CRMariage',
        'CINTemoin1',
        'CINTemoin2',
        'CINHomme',
        'CINFemme',
        'CCBHomme',
        'CCBFemme',
        'prixMariage',
    ];

    protected $primaryKey = 'idActeMariage'; // Primary key of the table
    public $incrementing = true; // Auto-incrementing primary key
    public $timestamps = false; // Disable 'created_at' and 'updated_at' timestamps

    // Relationship with Acte table
    public function acte(): BelongsTo
    {
        return $this->belongsTo(acte::class, 'idActe'); // Assuming 'idActe' is the foreign key column
    }

    // Accessors for image fields (CINTemoin1, CINTemoin2, CINHomme, CINFemme, CCBHomme, CCBFemme)

    public function getCINTemoin1Attribute()
    {
        if ($this->CINTemoin1) {
            return Storage::url($this->CINTemoin1); // Generate the image URL
        } else {
            return null;
        }
    }

    public function getCINTemoin2Attribute()
    {
        // Similar to getCINTemoin1Attribute()
        if ($this->CINTemoin2) {
            return Storage::url($this->CINTemoin2);
        } else {
            return null;
        }
    }

    public function getCINHommeAttribute()
    {
        if ($this->CINHomme) {
            return Storage::url($this->CINHomme);
        } else {
            return null;
        }
    }
    public function getCINFemmeAttribute()
    {
        if ($this->CINFemme) {
            return Storage::url($this->CINFemme);
        } else {
            return null;
        }
    }
    public function getCBBHommeAttribute()
    {
        if ($this->CBBHomme) {
            return Storage::url($this->CBBHomme);
        } else {
            return null;
        }
    }
    public function getCBBFemmeAttribute()
    {
        if ($this->CBBFemme) {
            return Storage::url($this->CBBFemme);
        } else {
            return null;
        }
    }


    public function setCINTemoin1Attribute($image)
    {
        // Similar to setCINDemandeurAttribute() in the acte.php model
        if ($image) {
            $path = $image->store('actes_mariages/images');
            $this->CINTemoin1 = $path;
        }
    }

    public function setCINTemoin2Attribute($image)
    {
        // Similar to setCINTemoin1Attribute()
        if ($image) {
            $path = $image->store('actes_mariages/images');
            $this->CINTemoin2 = $path;
        }
    }
    public function setCINHommeAttribute($image)
    {

        if ($image) {
            $path = $image->store('actes_mariages/images');
            $this->CINHomme = $path;
        }
    }
    public function setCINFemmeAttribute($image)
    {

        if ($image) {
            $path = $image->store('actes_mariages/images');
            $this->CINFemme = $path;
        }
    }
    public function setCBBHommeAttribute($image)
    {

        if ($image) {
            $path = $image->store('actes_mariages/images');
            $this->CBBHomme = $path;
        }
    }
    public function setCBBFemmeAttribute($image)
    {

        if ($image) {
            $path = $image->store('actes_mariages/images');
            $this->CBBFemme = $path;
        }
    }
}
