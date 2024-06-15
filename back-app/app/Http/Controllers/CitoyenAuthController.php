<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use App\Models\Citoyen;
use Inertia\Inertia;

class CitoyenAuthController extends Controller
{
    public function showLoginForm()
    {
        return Inertia::render('Auth/LoginCit', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'cin' => 'required|string',
            'password' => 'required|string',
        ]);

        $citoyen = Citoyen::where('emailCitoyen', $request->email)
                          ->where('numCIN', $request->cin)
                          ->first();

        if ($citoyen && Hash::check($request->password, $citoyen->mdpCitoyen)) {
            Auth::guard('citoyen')->login($citoyen);
            return redirect()->route('legalisation',['user' => $citoyen->idCitoyen]);
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::guard('citoyen')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}


