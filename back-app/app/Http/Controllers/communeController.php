<?php

namespace App\Http\Controllers;

use App\Models\commune;
use Illuminate\Http\Request;

class communeController extends Controller
{
    public function read()
    {
        $communes = commune::all();
        $result = $communes->map(function ($communes) {
            return [
                'idCommune' => $communes->idCommune,
                'nomCommune' => $communes->nomCommune,
            ];
        });

        return response()->json($result);
    }
    public function update(Request $request, $id)
    {

        $communes = commune::find($id);
        $communes->save();

        return response()->json(['success' => 'Acte mis à jour avec succès.', 'communes' => $communes]);
    }
    public function create(Request $request)
    {
        $commune = new commune();
        $commune->idCommune = $request->input('idCommune');
        $commune->nomCommune = $request->input('nomCommune');
        $commune->save();

        return response()->json(['success' => 'commune créé avec succès.', 'commune' => $commune]);
    }
    public function delete($id)
    {
        commune::find($id)->delete();
    }
}
