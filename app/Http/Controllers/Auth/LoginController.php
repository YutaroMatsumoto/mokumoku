<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        logger('controllerにははいっている');
        logger('controllerにははいっている');
        $this->middleware('guest')->except('logout');
        $this->middleware('guest')->only('showLoginForm');
        $this->middleware('auth')->only('logout');
    }

    public function showLoginForm()
    {
        logger('loginformをひょうじするよ');
        logger('loginformをひょうじするよ');
        logger('loginformをひょうじするよ');
        return view('auth/login');
    }

    public function login(Request $request)
    {
        $this->validateLogin($request);

        if ($this->attemptLogin($request)) {
            return $this->sendLoginResponse($request);
        }
        return $this->sendFailedLoginResponse($request);
    }

}
