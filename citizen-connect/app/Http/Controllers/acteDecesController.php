<?php

namespace App\Http\Controllers;

use App\Models\acteDeces;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class acteDecesController extends Controller
{
    public function read()
    {
        $acteDeces = acteDeces::all();
        $result = $acteDeces->map(function ($acteDeces) {
            return [
                'idActe' => $acteDeces->idActe,
                'nomDefunt' => $acteDeces->nomDefunt,
                'dateNDefunt' => $acteDeces->dateNDefunt,
                'dateDefunt' => $acteDeces->dateDefunt,
                'CINDefunt' => $acteDeces->CINDefunt,
                'ficheDeces' => $acteDeces->ficheDeces,
                'ficheBMH' => $acteDeces->ficheBMH,
                'prixDeces' => $acteDeces->prixDeces,
            ];
        });

        return response()->json($result);
    }
    public function update(Request $request, $id)
    {
        $acteDeces = acteDeces::where('idActe', $id)->first();
        if (!$acteDeces) {
            return response()->json(['error' => 'Acte de décès introuvable'], 404);
        }
        $acteDeces->fill($request->all());
        $acteDeces->save();
        return response()->json(['message' => 'Acte de décès mis à jour avec succès']);
    }
    public function create(Request $request)
    {
        $acteDeces = new acteDeces();
        $acteDeces->idActe = $request->input('idActe');
        $acteDeces->nomDefunt = $request->input('nomDefunt');
        $acteDeces->dateNDefunt = $request->input('dateNDefunt');
        $acteDeces->dateDeces = $request->input('dateDeces');
        $acteDeces->CINDefunt = $request->file('CINDefunt');
        $acteDeces->ficheDeces = $request->file('ficheDeces');
        $acteDeces->ficheBMH = $request->file('ficheBMH');
        $acteDeces->prixDeces = $request->input('prixDeces');

        $acteDeces->save();

        return response()->json(['success' => 'acteDeces créé avec succès.', 'acteDeces' => $acteDeces]);
    }
    public function delete($id)
    {
        //delete where idActe= $id
        DB::table('acteDeces')
            ->where('idActe', $id)
            ->delete();
    }
}
