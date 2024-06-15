<?php

namespace App\Http\Controllers;

use App\Models\admin;
use Illuminate\Http\Request;
use Inertia\Inertia;


class adminController extends Controller
{
    public function index(){
        return Inertia::render('Admin/AccueilAdmin');
    }

    public function read()
    {
        $admins = admin::all();
        $result = $admins->map(function ($admins) {
            return [
                'idAdmin' => $admins->idAdmin,
                'nomAdmin' => $admins->nomAdmin,
                'prenomAdmin' => $admins->prenomAdmin,
                'mdpAdmin' => $admins->mdpAdmin,
                'emailAdmin' => $admins->emailAdmin,
                'idCommune' => $admins->idCommune,
                'contactAdmin' => $admins->contactAdmin,
            ];
        });

        return response()->json($result);
    }
    public function update(Request $request, $id)
    {
        $admins = admin::find($id);
        $admins->save();

        return response()->json(['success' => 'Acte mis à jour avec succès.', 'admin' => $admins]);
    }
    public function create(Request $request)
    {
        $admin = new admin();
        $admin->idAdmin = $request->input('idAdmin');
        $admin->nomAdmin = $request->input('nomAdmin');
        $admin->prenomAdmin = $request->input('prenomAdmin');
        $admin->idCommune = $request->input('idCommune');
        $admin->mpdAdmin = $request->input('mdpAdmin');
        $admin->emailAdmin = $request->input('emailAdmin');
        $admin->contactAdmin = $request->input('contactAdmin');
        $admin->save();

        return response()->json(['success' => 'admin créé avec succès.', 'admin' => $admin]);
    }
    public function delete($id)
    {
        admin::find($id)->delete();
    }
}
