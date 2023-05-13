<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterUserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use function NunoMaduro\Collision\Exceptions\getMessage;

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
    return Inertia::render('Landing', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'isLogin' => session()->has('isLogin') ? session()->get('isLogin') : false,
    ]); 
});

Route::get('/loginp', function () {
    $emailError = "";
    $passwordError = "";
    if (session("errors")) {
        if (session("errors")->getMessages()['email'] ?? null) {
            $passwordError = session("errors")->getMessages()['email'][0];
        }
    }

    return Inertia::render('LoginSignup', [
        'text' => "Login",
        'url' => "login",
        'navText' => "Sign Up",
        'navLink' => '/signup',
        'emailError' => $emailError,
        'passwordError' => $passwordError
    ]); 
});

Route::get('/signup', function () {
    $emailError = "";
    $passwordError = "";
    if (session("errors")) {
        if (session("errors")->getMessages()['email'] ?? null) {
            $emailError = session("errors")->getMessages()['email'][0];
        }

        if (session("errors")->getMessages()['password'] ?? null) {
            $passwordError = session("errors")->getMessages()['password'][0];
        }
    }
    return Inertia::render('LoginSignup', [
        'text' => "Sign Up",
        'url' => "register",
        'navText' => "Login",
        'navLink' => '/loginp',
        'emailError' => $emailError,
        'passwordError' => $passwordError
    ]); 
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
