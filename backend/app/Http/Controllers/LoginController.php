<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $fields = $request->validate([
            "email" => ["required", "email"],
            "password" => ["required"]
        ]);

        $user = User::where("email", $fields["email"])->first();

        if (!$user || !Hash::check($fields["password"], $user->password)) {
            throw ValidationException::withMessages([
                "email" => ["Not valid credentials"]
            ]);
        }

        return response()->json([
            "user" => $user,
            "token" => $user->createToken("cat_app")->plainTextToken
        ], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
    }
}
