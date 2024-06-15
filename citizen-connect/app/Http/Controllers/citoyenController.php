<?php

namespace App\Http\Controllers;

use App\Models\citoyen;
use Illuminate\Http\Request;

class citoyenController extends Controller
{
    public function read()
    {
        $citoyens = citoyen::all();
        $result = $citoyens->map(function ($citoyens) {
            return [
                'idCitoyen' => $citoyens->idCitoyen,
                'nomCitoyen' => $citoyens->nomCitoyen,
                'prenomCitoyen' => $citoyens->prenomCitoyen,
                'emailCitoyen' => $citoyens->emailCitoyen,
                'contactCitoyen' => $citoyens->contactCitoyen,
                'numCIN' => $citoyens->numCIN,
                'adresseCitoyen' => $citoyens->adresseCitoyen,
                'mdpCitoyen' => $citoyens->mdpCitoyen,
            ];
        });

        return response()->json($result);
    }
    public function update(Request $request, $id)
    {
        $citoyens = citoyen::find($id);
        $citoyens->save();

        return response()->json(['success' => 'Acte mis à jour avec succès.', 'citoyen' => $citoyens]);
    }
    public function create(Request $request)
    {
        $citoyen = new citoyen();
        $citoyen->idCitoyen = $request->input('idCitoyen');
        $citoyen->nomCitoyen = $request->input('nomCitoyen');
        $citoyen->prenomCitoyen = $request->input('prenomCitoyen');
        $citoyen->emailCitoyen = $request->input('emailCitoyen');
        $citoyen->contactCitoyen = $request->input('contactCitoyen');
        $citoyen->numCIN = $request->input('numCIN');
        $citoyen->adresseCitoyen = $request->input('adresseCitoyen');
        $citoyen->mdpCitoyen = $request->input('mdpCitoyen');
        $citoyen->save();

        return response()->json(['success' => 'citoyen créé avec succès.', 'citoyen' => $citoyen]);
    }
    public function delete($id)
    {
        citoyen::find($id)->delete();
    }
}
