<?php

namespace App\Http\Controllers;

use App\Models\Canal;
use App\Models\Dossier;
use App\Models\Membre;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class RouteController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/admin');
    }

    public function legal()
    {
        return Inertia::render('Admin/LegalPage');
    }

    public function naissance()
    {
        return Inertia::render('Admin/acteNaissance');
    }

    public function mariage()
    {
        return Inertia::render('Admin/acteMariage');
    }

    public function deces()
    {
        return Inertia::render('Admin/acteDeces');
    }
}
