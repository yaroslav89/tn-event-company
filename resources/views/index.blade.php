@extends('layouts.homepage')
	
    @section('content')
        <main class="content-wrapper">
        	<sectio class="about">
				@foreach ($about as $value)
					<h2 class="title">{{ $value->name }}</h2>
    				<p>{{ $value->content }}</p>
				@endforeach
        	</section>
        </main>
    @endsection