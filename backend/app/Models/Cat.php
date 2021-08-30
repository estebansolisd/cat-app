<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Cat extends Model
{
    use HasFactory;
    protected $fillable = [
        "name",
        "age",
        "gender_id",
        "breed_id"
    ];


    /**
     * Get the breed associated with the Cat
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function breed(): HasOne
    {
        return $this->hasOne(Breed::class);
    }

    /**
     * Get the gender associated with the Cat
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function gender(): HasOne
    {
        return $this->hasOne(Gender::class);
    }
}
