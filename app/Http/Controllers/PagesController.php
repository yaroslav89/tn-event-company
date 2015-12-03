<?php 
	namespace App\Http\Controllers;

	use App\Http\Controllers\Controller;

	Class PagesController extends Controller {
		
		public function home() {
			$title = "Homepage";
			return view('index',['title' => $title]);
		}
	}
 ?>