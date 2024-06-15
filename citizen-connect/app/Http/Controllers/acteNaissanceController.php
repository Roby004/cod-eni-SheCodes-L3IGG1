<?php

namespace App\Http\Controllers;

use App\Models\acteNaissance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class acteNaissanceController extends Controller
{
    public function read()
    {
        $acteNaissances = acteNaissance::all();
        $result = $acteNaissances->map(function ($acteNaissances) {
            return [
                'idActe' => $acteNaissances->idActe,
                'nomNaissance' => $acteNaissances->nomNaissance,
                'prenomNaissance' => $acteNaissances->prenomNaissance,
                'dateNaissance' => $acteNaissances->dateNaissance,
                'lieuNaissance' => $acteNaissances->lieuNaissance,
                'nomPere' => $acteNaissances->nomPere,
                'nomMere' => $acteNaissances->nomMere,
                'agePere' => $acteNaissances->agePere,
                'ageMere' => $acteNaissances->ageMere,
                'professionPere' => $acteNaissances->professionPere,
                'professionMere' => $acteNaissances->professionMere,
                'lieuParent' => $acteNaissances->lieuParent,
                'regimeMatrimonial' => $acteNaissances->regimeMatrimonial,
                'CRNaissance' => $acteNaissances->CRNaissance,
                'copieNaissance' => $acteNaissances->copieNaissance,
                'prixNaissance' => $acteNaissances->prixNaissance,
            ];
        });

        return response()->json($result);
    }
    public function update(Request $request, $id)
    {
        $acteNaissances = acteNaissance::where('idActe', $id)->first();
        if (!$acteNaissances) {
            return response()->json(['error' => 'Acte de naissance introuvable'], 404);
        }
        $acteNaissances->fill($request->all());
        $acteNaissances->save();
        return response()->json(['message' => 'Acte de naissance mis à jour avec succès']);
    }
    public function create(Request $request)
    {
        $acteNaissances = new acteNaissance();
        $acteNaissances->idActe = $request->input('idActe');
        $acteNaissances->nomNaissance = $request->input('nomNaissance');
        $acteNaissances->prenomNaissance = $request->input('prenomNaissance');
        $acteNaissances->dateNaissance = $request->input('dateNaissance');
        $acteNaissances->lieuNaissance = $request->input('lieuNaissance');
        $acteNaissances->nomPere = $request->input('nomPere');
        $acteNaissances->nomMere = $request->input('nomMere');
        $acteNaissances->agePere = $request->input('agePere');
        $acteNaissances->ageMere = $request->input('ageMere');
        $acteNaissances->professionPere = $request->input('professionPere');
        $acteNaissances->professionMere = $request->input('professionMere');
        $acteNaissances->lieuParent = $request->input('lieuParent');
        $acteNaissances->regimeMatrimonial = $request->input('regimeMatrimonial');
        $acteNaissances->CRNaissance = $request->file('CRNaissance');
        $acteNaissances->copieNaissance = $request->file('copieNaissance');
        $acteNaissances->prixNaissance = $request->input('prixNaissance');


        $acteNaissances->save();

        return response()->json(['success' => 'acteNaissance créé avec succès.', 'acteNaissance' => $acteNaissances]);
    }
    public function delete($id)
    {
        DB::table('acteNaissance')
            ->where('idActe', $id)
            ->delete();
    }
}
