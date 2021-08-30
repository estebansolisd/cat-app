<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBreedsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('breeds', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->string('name');
            $table->longText('description');
            $table->longText('image_url')->nullable();
            $table->tinyInteger('child_friendly');
            $table->tinyInteger('dog_friendly');
            $table->boolean('hairless');
            $table->tinyInteger('health_issues');
            $table->boolean('hypoallergenic');
            $table->tinyInteger('intelligence');
            $table->boolean('short_legs');
            $table->tinyInteger('stranger_friendly');
            $table->string('temperament');
            $table->string('imperial');
            $table->string('metric');
            $table->string('origin');
            $table->longText('wikipedia_url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('breeds');
    }
}
