<?php

namespace App\Http\Controllers;

use App\Models\legalisation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Citoyen;
use Inertia\Inertia;
use App\Models\Acte;


class legalisationController extends Controller
{
    public function index($userId){
        $citoyen = Citoyen::findOrFail($userId);
        return Inertia::render('Legalisation/LegalPage',['citoyen' => $citoyen->toArray()]);
    }

    public function read()
    {
        $legislations = legalisation::all();
        $result = $legislations->map(function ($legislations) {
            return [
                'idActe' => $legislations->idActe,
                'fichierLegaliser' => $legislations->fichierLegaliser,
                'CRlegal' => $legislations->CRlegal,
            ];
        });

        return response()->json($result);
    }
    public function update(Request $request, $id)
    {
        $legalisations = legalisation::find($id);
        $legalisations->save();

        return response()->json(['success' => 'Acte mis à jour avec succès.', 'legalisation' => $legalisations]);
    }
    public function create(Request $request)
    {
        $legalisations = new legalisation();
        $legalisations->idActe = $request->input('idActe');
        $legalisations->fichierLegaliser = $request->file('fichierLegaliser');
        $legalisations->CRlegal = $request->file('CRlegal');

        return response()->json(['success' => 'legalisation créé avec succès.', 'legalisation' => $legalisations]);
    }
    public function delete($id)
    {
        DB::table('acteDeces')
            ->where('idActe', $id)
            ->delete();
    }
}
