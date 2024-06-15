<?php

namespace App\Http\Controllers;

use App\Models\demande;
use Illuminate\Http\Request;

class demandeController extends Controller
{
    public function read()
    {
        $demandes = demande::all();
        $result = $demandes->map(function ($demandes) {
            return [
                'idDemande' => $demandes->idDemande,
                'idActe' => $demandes->idActe,
                'etat' => $demandes->etat,
                'quantite' => $demandes->quantite,
                'paye' => $demandes->paye,
                'dateDemande' => $demandes->dateDemande,
                'idCitoyen' => $demandes->idCitoyen,
                'raison' => $demandes->raison,
            ];
        });

        return response()->json($result);
    }
    public function update(Request $request, $id)
    {
        $demandes = demande::find($id);
        $demandes->save();

        return response()->json(['success' => 'Acte mis à jour avec succès.', 'demande' => $demandes]);
    }
    public function create(Request $request)
    {
        $demande = new demande();
        $demande->idDemande = $request->input('idDemande');
        $demande->idActe = $request->input('idActe');
        $demande->etat = $request->input('etat');
        $demande->quantite = $request->input('quantite');
        $demande->paye = $request->input('paye');
        $demande->dateDemande = $request->input('dateDemande');
        $demande->idCitoyen = $request->input('idCitoyen');
        $demande->raison = $request->input('raison');

        $demande->save();

        return response()->json(['success' => 'demande créé avec succès.', 'demande' => $demande]);
    }
    public function delete($id)
    {
        demande::find($id)->delete();
    }
}
