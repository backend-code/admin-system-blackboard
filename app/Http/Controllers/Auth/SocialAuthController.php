<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Socialite;
// use App\User;


class SocialAuthController extends Controller
{

    public function redirectToProvider($provider)
 {
     return Socialite::driver($provider)->redirect()->to('/home');
 }

 public function handleProviderCallback($provider)
 {
    $providerUser = Socialite::driver($provider)->user();
            
        $user = $this->createOrGetUser($provider, $providerUser);
        auth()->login($user);

        return redirect()->to('/home');
 }
 
}
