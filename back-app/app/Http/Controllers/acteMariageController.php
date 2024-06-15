<?php

namespace App\Http\Controllers;

use App\Models\acteDeces;
use App\Models\acteMariage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class acteMariageController extends Controller
{
    public function read()
    {
        $acteMariages = acteMariage::all();
        $result = $acteMariages->map(function ($acteMariages) {
            return [
                'idActe' => $acteMariages->idActe,
                'nomHomme' => $acteMariages->nomHomme,
                'nomFemme' => $acteMariages->nomFemme,
                'dateNHomme' => $acteMariages->dateNHomme,
                'dateNFemme' => $acteMariages->dateNFemme,
                'nomTemoin1' => $acteMariages->nomTemoin1,
                'nomTemoin2' => $acteMariages->nomTemoin2,
                'dateMariage' => $acteMariages->acteMariage,
                'CRMariage' => $acteMariages->CRMariage,
                'CINTemoin1' => $acteMariages->CINTemoin1,
                'CINTemoin2' => $acteMariages->CINTemoin2,
                'CINHomme' => $acteMariages->CINHomme,
                'CINFemme' => $acteMariages->CINFemme,
                'CCBHomme' => $acteMariages->CCBHomme,
                'CCBFemme' => $acteMariages->CCBFemme,
                'prixMariage' => $acteMariages->prixMariage,
            ];
        });

        return response()->json($result);
    }
    public function update(Request $request, $id)
    {
        $acteMariages = acteMariage::where('idActe', $id)->first();
        if (!$acteMariages) {
            return response()->json(['error' => 'Acte de mariage introuvable'], 404);
        }
        $acteMariages->fill($request->all());
        $acteMariages->save();
        return response()->json(['message' => 'Acte de mariage mis à jour avec succès']);
    }

    public function create(Request $request)
    {
        $acteMariages = new acteMariage();
        $acteMariages->idActe = $request->input('idActe');
        $acteMariages->nomHomme = $request->input('nomHomme');
        $acteMariages->nomFemme = $request->input('nomFemme');
        $acteMariages->dateNHomme = $request->input('dateNHomme');
        $acteMariages->dateNFemme = $request->input('dateNFemme');
        $acteMariages->nomTemoin1 = $request->input('nomTemoin1');
        $acteMariages->nomTemoin2 = $request->input('nomTemoin2');
        $acteMariages->dateMariage = $request->input('dateMariage');
        $acteMariages->CRMariage = $request->file('CRMariage');
        $acteMariages->CINTemoin1 = $request->file('CINTemoin1');
        $acteMariages->CINTemoin2 = $request->file('CINTemoin2');
        $acteMariages->CINHomme = $request->file('CINHomme');
        $acteMariages->CINFemme = $request->file('CINFemme');
        $acteMariages->CCBHomme = $request->file('CCBHomme');
        $acteMariages->CCBFemme = $request->file('CCBFemme');
        $acteMariages->prixMariage = $request->input('prixMariage');

        $acteMariages->save();

        return response()->json(['success' => 'acteMariage créé avec succès.', 'acteMariage' => $acteMariages]);
    }
    public function delete($id)
    {
        DB::table('acteMariage')
            ->where('idActe', $id)
            ->delete();
    }
}
