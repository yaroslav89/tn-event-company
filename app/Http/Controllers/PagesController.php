<?php 
	namespace App\Http\Controllers;

	use DB;
	use App\Http\Controllers\Controller;

	Class PagesController extends Controller {
		
		public function home() {
			$title = "Event Company TN";

			// $protfolio = DB::select();
			// $services = DB::select();
			 $about = DB::select('select * from about');
			// $events = DB::select();

			return view('index',['title' => $title, 'about' => $about]);
		}
	}
 ?>