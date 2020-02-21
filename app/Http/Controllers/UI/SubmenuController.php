<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Submenu;

class SubmenuController extends Controller
{
    // get all 
    public function index() {
        $results = Submenu::all();
        return response()->json(['total' => count($results), 'version' => "20200212235959",'results' => $results ],200);
    }

    // get point
    public function show(Submenu $id) {
        return $id;
    }

    // create data
    public function create(Request $request)
    {
        $submenu = Submenu::create($request->all());

        return response()->json($submenu);
    }

    // upate data 
    public function update(Request $request, Submenu $id)
    {
        $id->update($request->all());

        return response()->json($id);
    }

    // delete data 
    public function delete(Submenu $id)
    {
        $id->delete();

        return response()->json(null, 204);
    }
}
