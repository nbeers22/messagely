<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    /**
     * The messages that belong to the chat.
     */
    public function messages() {
        return $this->hasMany( Message::class );
    }

    /**
     * The users that belong to the chat.
     */
    public function users() {
        return $this->belongsToMany( User::class,'role_user' );
    }
}
