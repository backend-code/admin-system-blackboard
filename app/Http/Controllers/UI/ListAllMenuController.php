<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ListAllMenu;

class ListAllMenuController extends Controller
{
   // get all 
   public function index() {
    $results = ListAllMenu::all();
    return response()->json(['total' => count($results), 'version' => "20200212235959",'results' => $results ],200);
    }

// get point
public function show(ListAllMenu $id) {
    return $id;
}

// create data
public function create(Request $request)
{
    $list_all_menu = ListAllMenu::create($request->all());

    return response()->json($list_all_menu);
}

// upate data 
public function update(Request $request, ListAllMenu $id)
{
    $id->update($request->all());

    return response()->json($id);
}

// delete data 
public function delete(ListAllMenu $id)
{
    $id->delete();

    return response()->json(null, 204);
}
}