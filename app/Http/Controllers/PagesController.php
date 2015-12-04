<?php 
	namespace App\Http\Controllers;

	use App\Http\Controllers\Controller;

	Class PagesController extends Controller {
		
		public function home() {
			$title = "TN Event Company";
			return view('index',['title' => $title]);
		}
	}
 ?>