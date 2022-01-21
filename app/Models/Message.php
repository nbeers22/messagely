<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    /**
     * The chat that the message belongs to.
     */
    public function chat() {
        return $this->hasOne( Chat::class );
    }

    /**
     * The user that the message belongs to.
     */
    public function user() {
        return $this->hasOne( User::class );
    }
}
