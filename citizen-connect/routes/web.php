<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\acteController;
use App\Http\Controllers\acteDecesController;
use App\Http\Controllers\acteMariageController;
use App\Http\Controllers\acteNaissanceController;
use App\Http\Controllers\adminController;
use App\Http\Controllers\citoyenController;
use App\Http\Controllers\communeController;
use App\Http\Controllers\RouteController;
use App\Http\Controllers\demandeController;
use App\Http\Controllers\legalisationController;
use App\Http\Controllers\SmsController;
use App\Models\acteDeces;
use App\Models\acteMariage;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Vonage\Account\SmsPrice;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/page1/{user}', [UserController::class, 'show'])->name('page1.show');
Route::get('/legalisation/{user}', [legalisationController::class, 'index'])->name('legalisation');
Route::get('/accueil-agent', [adminController::class, 'index'])->name('accueil.agent');

Route::get('/readActe', [acteController::class, 'readActe']);
Route::get('/readCommune', [communeController::class, 'read']);
Route::get('/readAdmin', [adminController::class, 'read']);
Route::get('/readCitoyen', [citoyenController::class, 'read']);
Route::get('/readDemande', [demandeController::class, 'read']);
Route::get('/readLegalisation', [legalisationController::class, 'read']);
Route::get('/readActeDeces', [acteDecesController::class, 'read']);
Route::get('/readActeMariage', [acteMariageController::class, 'read']);
Route::get('/readActeNaissance', [acteNaissanceController::class, 'read']);
Route::get('/smsSend', [SmsController::class, 'sendSms']);

Route::put('/updateActe', [acteController::class, 'updateActe']);
Route::put('/updateCommune', [communeController::class, 'update']);
Route::put('/updateAdmin', [adminController::class, 'update']);
Route::put('/updateCitoyen', [citoyenController::class, 'update']);
Route::put('/updateDemande', [demandeController::class, 'update']);
Route::put('/updateLegalisation', [legalisationController::class, 'update']);
Route::put('/updateActeDeces', [acteDecesController::class, 'update']);
Route::put('/updateActeMariage', [acteMariageController::class, 'update']);
Route::put('/updateActeNaissance', [acteNaissanceController::class, 'update']);

Route::post('/createActe', [acteController::class, 'createActe']);
Route::post('/createCommune', [communeController::class, 'create']);
Route::post('/ceateAdmin', [adminController::class, 'create']);
Route::post('/createCitoyen', [citoyenController::class, 'create']);
Route::post('/createDemande', [demandeController::class, 'create']);
Route::post('/createLegalisation', [legalisationController::class, 'create']);
Route::post('/createActeDeces', [acteDecesController::class, 'create']);
Route::post('/createActeMariage', [acteMariageController::class, 'create']);
Route::post('/createActeNaissance', [acteNaissanceController::class, 'create']);

Route::delete('/deleteActe/{id}', [acteController::class, 'deleteActe']);
Route::delete('/deleteCommune/{id}', [communeController::class, 'delete']);
Route::delete('/deleteAdmin/{id}', [adminController::class, 'delete']);
Route::delete('/deleteCitoyen/{id}', [citoyenController::class, 'delete']);
Route::delete('/deleteDemande/{id}', [demandeController::class, 'delete']);
Route::delete('/deleteLegalisation/{id}', [legalisationController::class, 'delete']);
Route::delete('/deleteActeDeces/{id}', [acteDecesController::class, 'delete']);
Route::delete('/deleteActeMariage/{id}', [acteMariageController::class, 'delete']);
Route::delete('/deleteActeNaissance/{id}', [acteNaissanceController::class, 'delete']);


Route::get('/test', [RouteController::class, 'index']);
Route::get('/legal', [RouteController::class, 'legal']);
Route::get('/demande/acte-de-naissance', [RouteController::class, 'naissance']);
Route::get('/demande/acte-de-mariage', [RouteController::class, 'mariage']);
Route::get('/demande/acte-de-décès', [RouteController::class, 'deces']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

/*Route::middleware('guest:citoyen')->group(function () {
    Route::get('citoyen/login', [CitoyenAuthController::class, 'showLoginForm'])->name('citoyen.login');
    Route::post('citoyen/login', [CitoyenAuthController::class, 'login']);
});

Route::middleware('auth:citoyen')->group(function () {
    Route::post('citoyen/logout', [CitoyenAuthController::class, 'logout'])->name('citoyen.logout');
    Route::get('/', function () {
        return inertia('Welcome');
    })->name('accueil');
});
*/
require __DIR__.'/auth.php';
