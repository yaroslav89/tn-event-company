<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model

{
    protected $table = 'gallery';

    public function event() 

    {
    	return $this->belongsTo('App\Event');
    }

}
