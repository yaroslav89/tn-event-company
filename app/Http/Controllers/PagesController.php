<?php 
	namespace App\Http\Controllers;

	use DB;
	use App\Http\Controllers\Controller;
	use App\Event;
	use App\Gallery;
	use App\Service;

	Class PagesController extends Controller 

	{
		
		public function home() 

		{
			$title = "Event Company TN";
			$events = Event::all();
			$services = Service::all();
			$about = DB::select('select * from about');
			$video = DB::select('select iframe from video');

			return view('index',[
					'title' => $title, 
					'about' => $about, 
					'services' => $services, 
					'events' => $events,
					'video' => $video
				]);

		}

	}
 ?>