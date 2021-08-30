<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Breed extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'name',
        'image_url',
        'child_friendly',
        'dog_friendly',
        'hairless',
        'health_issues',
        'hypoallergenic',
        'intelligence',
        'short_legs',
        'stranger_friendly',
        'temperament',
        'imperial',
        'metric',
        'origin',
        'wikipedia_url'
    ];
}
