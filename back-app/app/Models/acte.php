<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class acte extends Model
{
    use HasFactory;
    protected $table = 'acte'; // Nom de la table dans la base de données

    protected $fillable = [
        'CINDemandeur', // Nom du champ pour l'image CINDemandeur
    ];

    protected $primaryKey = 'idActe'; // Clé primaire de la table
    public $incrementing = true; // Auto-incrémentation de la clé primaire
    public $timestamps = false; // Désactiver les champs 'created_at' et 'updated_at'

    // Accesseur pour l'image CINDemandeur
    public function getCINDemandeurAttribute()
    {
        if ($this->CINDemandeur) {
            // return Storage::url($this->CINDemandeur); // Générer l'URL de l'image
            return Storage::url($this->CINDemandeur);
        } else {
            return null;
        }
    }

    // Mutateur pour l'image CINDemandeur
    public function setCINDemandeurAttribute($image)
    {
        if ($image) {
            // Enregistrer l'image dans le stockage (ex: 'actes/images')
            $path = $image->store('actes/images');
            $this->CINDemandeur = $path;
        }
    }
}
