@extends('layouts.homepage')
	
    @section('content')
        <main class="content-wrapper">
        	<sectio class="about">
            @if( isset($about) && !empty($about))
				@foreach ($about as $value)
					<h2 class="title">{{ $value->title }}</h2>
    				<p>{{ $value->content }}</p>
				@endforeach
            @else 
                <h1>Error No data found...</h1>
            @endif
        	</section>

            <section class="services">
                
            </section>
        </main>
    @endsection