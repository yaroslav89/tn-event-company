@extends('layouts.homepage')
	
    @section('content')
        <main class="content-wrapper">
        	<section class="about">
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
                <h2 class="title">Услуги</h2>
               @if( isset($services) && !empty($services))
                    @foreach($services as $value)
                        <div class="service-content">
                            <div class="service-title"><p>{{$value->title}}</p></div>
                            <img class="service-img" src="{{asset($value->imgUrl)}}" alt="{{$value->title}}">
                            <input class="data" type="hidden" value="{{$value->description}}">
                        </div>
                    @endforeach
                @else
                    <h1>Error No data found...</h1>
                @endif
            </section>
        </main>
    @endsection