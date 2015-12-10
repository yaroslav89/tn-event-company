<?php 
	namespace App\Http\Controllers;

	use DB;
	use App\Http\Controllers\Controller;

	Class PagesController extends Controller {
		
		public function home() {
			$title = "Event Company TN";
			$events = DB::select('select * from events where event_id = ?', ['svt_vecher']);
			$services = DB::select('select * from services');
			$about = DB::select('select * from about');
			$gallery = DB::select('select imgUrl from gallery where event_id = ?', ['svt_vecher']);

			return view('index',[
					'title' => $title, 
					'about' => $about, 
					'services' => $services, 
					'gallery' => $gallery ,
					'events' => $events
				]);
		}
	}
 ?>