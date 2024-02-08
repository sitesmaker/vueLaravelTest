<?php

namespace App\Http\Controllers;

use App\Models\Message;

class MessageController extends Controller
{
    public function index()
    {
        
        $data = request()->validate([
            'name' => 'required|string',
            'text' => 'required|string',
        ]);

        Message::factory()->state([
            'name' => $data['name'],
            'text' => $data['text'],
        ])->create();
    }
}
