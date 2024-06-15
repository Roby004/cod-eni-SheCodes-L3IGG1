<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class commune extends Model
{
    use HasFactory;
    protected $table = 'commune'; // Name of the table in the database

    protected $fillable = [
        'nomCommune',
    ];

    protected $primaryKey = 'idCommune';
    public $incrementing = true;
    public $timestamps = false;
}
