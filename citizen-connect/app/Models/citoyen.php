<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
//use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class citoyen extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $table = 'citoyen'; // Name of the table in the database

    protected $fillable = [
        'nomCitoyen',
        'prenomCitoyen',
        'emailCitoyen',
        'numCIN',
        'contactCitoyen',
        'adresseCitoyen',
        'mdpCitoyen',
        'idCommune',
    ];

    protected $primaryKey = 'idCitoyen'; // Primary key of the table
    public $incrementing = true; // Auto-incrementing primary key
    public $timestamps = false; // Disable 'created_at' and 'updated_at' timestamps

    // Specify the custom attributes for authentication
    protected $hidden = [
        'mdpCitoyen', // Hide the password attribute
        'remember_token',
    ];

    // Relationship with Commune table
    public function commune(): BelongsTo
    {
        return $this->belongsTo(Commune::class, 'idCommune');
    }

    // Get the password for the citoyen.
    public function getAuthPassword()
    {
        return $this->mdpCitoyen;
    }
}
