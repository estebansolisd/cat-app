<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class RegisterController extends Controller
{
    public function register(Request $request){
        $request->validate([
            "name" => ["required"],
            "email" => ["required", "email", "unique:users"],
            "password" => ["required", "min:8", "confirmed"]
        ]);

        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => Hash::make($request->password)
        ]);

        if ($user) {
            return response()->json([
                "user" => $user,
                "token" => $user->createToken("cat_app")->plainTextToken
            ], 200);
        }

        throw ValidationException::withMessages([
            "name" => ["The name wasn't specified"],
            "email" => ["The e-mail wasn't specified or invalid or is already picked"],
            "password" => ["The password wasn't specified or is less than 8 characters"],
        ]);

    }
}
