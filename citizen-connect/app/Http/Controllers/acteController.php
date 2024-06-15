<?php

namespace App\Http\Controllers;

use App\Models\acte;
use Illuminate\Http\Request;

class ActeController extends Controller
{
    public function readActe()
    {
        $actes = acte::all(); // Fetch all actes from the database

        $filteredActes = $actes->map(function ($acte) {
            return [
                'idActe' => $acte->idActe,
                'CINDemandeur' => $acte->CINDemandeur,
            ];
        });

        return response()->json($filteredActes);
    }

    public function updateActe(Request $request, $id)
    {
        $request->validate([
            'CINDemandeur' => 'sometimes|image',
        ]);

        $acte = acte::find($id);

        if ($request->hasFile('CINDemandeur')) {
            $acte->CINDemandeur = $request->file('CINDemandeur');
        }

        $acte->save();

        return response()->json(['success' => 'Acte mis à jour avec succès.', 'acte' => $acte]);
    }
    public function createActe(Request $request)
    {
        $request->validate([
            'CINDemandeur' => 'required|image',
        ]);

        $acte = new acte();
        $acte->CINDemandeur = $request->file('CINDemandeur');
        $acte->save();

        return response()->json(['success' => 'Acte créé avec succès.', 'acte' => $acte]);
    }

    public function deleteActe($id)
    {
        acte::find($id)->delete();
    }
}
